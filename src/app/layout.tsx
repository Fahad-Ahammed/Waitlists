import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./components/SideBar"));

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Waitlist Dashboard",
  },
  description: 'description: "Generated by create next app",',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`md:overflow-hidden ${GeistSans.className}`}>
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <ReduxProvider>
          <div className="mx-auto max-w-[1440px] md:flex">
            <Sidebar />
            <main
              id="main-content"
              className="grow overflow-hidden pt-[65px] md:pt-0"
              tabIndex={-1}
            >
              {children}
            </main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
