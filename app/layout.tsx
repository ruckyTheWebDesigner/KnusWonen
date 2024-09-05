import type { Metadata } from "next";

import "./globals.css";
import { poppins } from "./fonts/fonts";
import { SITE_NAME } from "./utils/consts";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Woningen op de markt`,
  description: `We verbeteren onze woningen`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={poppins.className}>
      <body
        className={` 
          antialiased`}>
        {children}
      </body>
    </html>
  );
}
