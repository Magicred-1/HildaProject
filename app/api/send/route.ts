import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/emails/investorWhitelist';
import { Resend } from 'resend';
import createEmbeddedWalletFromEmail from '@/components/client/createWalletFromEmail';

// Initialize Resend client with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await req.json();
    const { email, tokenSymbol } = body;

    if (!email || !tokenSymbol) {
      return NextResponse.json({ error: 'Missing email or tokenSymbol in request body' }, { status: 400 });
    }

    // Create embedded wallet for the email
    try {
      await createEmbeddedWalletFromEmail(email);
    } catch (walletError) {
      return NextResponse.json({ error: `Failed to create wallet` }, { status: 500 });
    }

    // Send email using Resend service
    try {
      const emailResponse = await resend.emails.send({
        from: 'Hilda <contact@hildaproject.xyz>',
        to: [email],
        subject: `Hello, you have been added to the whitelist for ${tokenSymbol}`,
        react: EmailTemplate({
          email,
          tokenSymbol,
        }),
      });

      // If email sending fails, handle the error
      if (emailResponse.error) {
        return NextResponse.json({ error: emailResponse.error }, { status: 400 });
      }

      // Return success response if everything goes well
      return NextResponse.json(emailResponse, { status: 200 });
    } catch (emailError) {
      return NextResponse.json({ error: `Failed to send email: ${emailError}` }, { status: 500 });
    }
  } catch (err) {
    // Handle JSON parsing errors or any unexpected issues
    return NextResponse.json({ error: `Unexpected error: ${err}` }, { status: 500 });
  }
}
