import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/emails/investorWhitelist';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, tokenSymbol } = req.body;

  // Validate required fields
  if (!email || !tokenSymbol) {
    return res.status(400).json({ error: 'Missing email or tokenSymbol in request body' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Hilda <contact@hildaproject.xyz>',
      to: [email],
      subject: `Hello you have been added to the whitelist for ${tokenSymbol}`,
      react: EmailTemplate({ 
        email,
        tokenSymbol
      }),
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong while sending the email.' });
  }
};
