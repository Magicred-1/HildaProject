import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";

export const metadata: Metadata = {
  title: "Hilda Project",
  description: "Hilda help you tokenize real world assets",
};
import { Toaster } from "sonner";

const dmsans = Lexend_Deca({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
