import * as React from 'react';

interface EmailTemplateProps {
    email: string;
    tokenSymbol: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    email,
    tokenSymbol,
}) => (
  <div>
    <h1>Hello {email} you have been added to the whitelist for {tokenSymbol} on Hilda Project</h1>
  </div>
);
