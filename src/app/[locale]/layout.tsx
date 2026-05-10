import type React from "react";
import { type Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter, Roboto_Mono } from "next/font/google";
import { Head } from "@/components/head";
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

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer | Christian",
  description: "My personal portfolio: showcasing my work and skills.",
  icons: {
    icon: "/boy.png",
  },
  openGraph: {
    title: 'Portfolio | Full Stack Developer | Christian',
    description: 'My personal portfolio: showcasing my work and skills.',
    url: 'https://tyn-lac.vercel.app',
    siteName: 'Portfolio | Full Stack Developer | Christian',
    images: [
      {
        url: 'https://tyn-lac.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'us_EN',
    type: 'website',
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
      <Head metadata={metadata} />
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
