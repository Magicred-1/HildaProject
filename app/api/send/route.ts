import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/emails/investorWhitelist';
import { Resend } from 'resend';
import createEmbeddedWalletFromEmail from '@/components/client/createWalletFromEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, tokenSymbol } = body;

    // Validate required fields
    if (!email || !tokenSymbol) {
      return NextResponse.json({ error: 'Missing email or tokenSymbol in request body' }, { status: 400 });
    }

    // Create embedded wallet for the email
    await createEmbeddedWalletFromEmail(email);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Hilda <contact@hildaproject.xyz>',
      to: [email],
      subject: `Hello you have been added to the whitelist for ${tokenSymbol}`,
      react: EmailTemplate({
        email,
        tokenSymbol,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
}
