import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NextAuthSessionProvider from "@/providers/next-auth-session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: " %s - Hiretics",
    default: "Hiretics",
  },
  description: "hiretics is a hr Automation software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NextAuthSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
