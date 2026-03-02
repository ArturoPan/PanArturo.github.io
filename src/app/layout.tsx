import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import CursorGlow from "@/components/ui/CursorGlow";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arturo Pan | Software Engineer",
  description:
    "Engineering backend systems that power real-world products at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <BackgroundGrid />
          <CursorGlow />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
