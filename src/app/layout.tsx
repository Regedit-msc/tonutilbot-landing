/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@components/navbar/Navbar";
import "./globals.css";
import localFont from "next/font/local";
import light from "@/assets/light.svg";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "TonderLabs - Building Web3 Solutions for the TON Network",
    template: "%s | TonderLabs",
  },
  description:
    "Building Web3 solutions for the TON Network. We're a company dedicated to developing the best utility software on the TON Network with innovative blockchain solutions.",
  keywords: [
    "TON Network",
    "Web3",
    "blockchain",
    "cryptocurrency",
    "DeFi",
    "TON",
    "utility software",
    "TonderLabs",
    "TonderBot",
  ],
  authors: [{ name: "TonderLabs" }],
  creator: "TonderLabs",
  publisher: "TonderLabs",
  metadataBase: new URL("https://tonderlabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "TonderLabs - Building Web3 Solutions for the TON Network",
    siteName: "TonderLabs",
    url: "https://tonderlabs.com",
    description:
      "We're a company dedicated to developing the best utility software on the TON Network with innovative blockchain solutions.",
    images: [
      {
        url: "https://tonderlabs.com/tonderlabs.png",
        width: 1200,
        height: 630,
        alt: "TonderLabs - Web3 Solutions for TON Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tonderlabs",
    creator: "@tonderlabs",
    title: "TonderLabs - Building Web3 Solutions for the TON Network",
    description:
      "Building Web3 solutions for the TON Network with innovative blockchain utility software.",
    images: [
      {
        url: "https://tonderlabs.com/tonderlabs.png",
        width: 1200,
        height: 630,
        alt: "TonderLabs - Web3 Solutions for TON Network",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const poppinsFont = localFont({
  src: [
    {
      path: "../../fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TonderLabs",
    description:
      "Building Web3 solutions for the TON Network. We're a company dedicated to developing the best utility software on the TON Network.",
    url: "https://tonderlabs.com",
    logo: "https://tonderlabs.com/tonderlabs.png",
    sameAs: [
      "https://t.me/tonderbot_news",
      "https://x.com/tonderlabs",
      "https://discord.com/invite/YdpyHVAr",
    ],
    foundingDate: "2023",
    industry: "Blockchain Technology",
    serviceType: "Web3 Development",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TonderLabs Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "TonderBot",
            description:
              "Best Utility Bot on the TON Network for buying, swapping, and selling TON",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={poppinsFont.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ashy w-full overflow-x-hidden box-border">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        <Navbar />
        <img
          src={light.src}
          alt="Decorative prism light background effect"
          className="absolute sm:h-fit w-full h-[40rem] top-0 opacity-85 sm:w-[70vw] sm:top-20 md:top-0 sm:left-[15vw] lg:w-[50vw] lg:left-[25vw]"
        />
        {children}
      </body>
    </html>
  );
}
