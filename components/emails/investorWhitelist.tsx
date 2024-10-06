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
    <h1>Hello, you have been added to the whitelist for ${tokenSymbol} check it out in <a href="https://hildaproject.xyz/buy-bond">Hilda</a></h1>
  </div>
);
