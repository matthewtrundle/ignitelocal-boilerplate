import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { generateOrganizationSchema } from "@/lib/schema/organizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LocalIgnite.ai | AI Automation for Local Business",
    template: "%s | LocalIgnite.ai"
  },
  description: "AI-powered website generation, chatbots, workflow automation, analytics, and more for local businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://localignite.ai",
    siteName: "LocalIgnite.ai",
    title: "LocalIgnite.ai | AI Automation for Local Business",
    description: "AI-powered website generation, chatbots, workflow automation, analytics, and more for local businesses.",
    images: [
      {
        url: "/images/LocalIgnite.ai Logo Design.png",
        width: 1200,
        height: 630,
        alt: "LocalIgnite.ai - AI Automation for Local Business"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LocalIgnite.ai | AI Automation for Local Business",
    description: "AI-powered website generation, chatbots, workflow automation, analytics, and more for local businesses.",
    images: ["/images/LocalIgnite.ai Logo Design.png"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate the JSON-LD schema
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
