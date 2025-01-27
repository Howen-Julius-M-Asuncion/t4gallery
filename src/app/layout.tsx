import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return(
    <nav className="flex items-center justify-between p-4 text-x1 font-semibold border-b">
      <div>Gallery</div>
      <div>Sign In</div>
      <div className="flex gap-4">
        <a href="">Home</a>
        <a href="">about</a>
      </div>  
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav/>
        <div className="w-full">First Layout</div>  
        {children}
      </body>
    </html>
  );
}
