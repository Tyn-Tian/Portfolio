import type React from "react";
import { type Metadata, type Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter, Roboto_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Toaster as ToasterProvider } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { type Locale } from "@/i18n";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import SmoothScrollLayout from "@/components/layout";
import ScrollToTopButton from "@/components/scroll-top-button";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tyn-lac.vercel.app"),
  title: "Portfolio | Full Stack Developer | Christian",
  description: "My personal portfolio: showcasing my work and skills.",
  authors: [{ name: "Christian" }],
  icons: {
    icon: "/boy.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Portfolio | Full Stack Developer | Christian",
    description: "My personal portfolio: showcasing my work and skills.",
    url: "https://tyn-lac.vercel.app",
    siteName: "Portfolio | Full Stack Developer | Christian",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full Stack Developer | Christian",
    description: "My personal portfolio: showcasing my work and skills.",
    images: ["/assets/og-image.png"],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn(
        "min-h-screen bg-background font-sans antialiased overflow-y-scroll",
        inter.variable,
        robotoMono.variable
      )}
      suppressHydrationWarning
    >

      <body className="w-full">
        <SmoothScrollLayout>
          <NextIntlClientProvider messages={messages}>
            <ViewTransitions>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <TooltipProvider>
                  <main className="flex flex-col items-center justify-center min-h-screen pt-24 pb-8 px-4">
                    <Header />
                    {children}
                    <ScrollToTopButton />
                    <Footer />
                  </main>
                </TooltipProvider>
                <Toaster />
                <ToasterProvider />
              </ThemeProvider>
              <Analytics />
              <SpeedInsights />
            </ViewTransitions>
          </NextIntlClientProvider>
        </SmoothScrollLayout>
      </body>
    </html>
  );
}
