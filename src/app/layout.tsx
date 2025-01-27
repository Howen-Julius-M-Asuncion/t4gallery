import "~/styles/globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <TopNav/>
          <div className="w-full">First Layout</div>  
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
