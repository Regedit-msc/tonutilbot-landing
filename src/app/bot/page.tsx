import { HeroSection } from "@components/bot_components/HeroSection";
import { BuySwapOrSell } from "@components/bot_components/BuySwapOrSell";
import { OpenTonbotOnTg } from "@components/bot_components/OpenTonbotOnTg";
import { CTA } from "@components/cta/CTA";
import IntroducingBot from "@components/bot_components/IntroducingMiniApp";
import BuySellAndSwap from "@components/bot_components/BuySellAndSwap";
import AccessToServices from "@components/bot_components/AccessToServices";
import ReferralsAndAirdrop from "@components/bot_components/ReferralsAndAirdrop";
import ParallaxScrollWrapper from "@components/bot_components/ParallaxScrollWrapper";
import { Metadata } from "next";
import ParallaxSections from "@components/bot_components/ParallaxSections";
import GridSection from "@components/bot_components/GridSection";
import StartTradingToday from "@components/bot_components/StartTradingToday";

export const metadata: Metadata = {
  title: "TonderBot - Best Utility Bot on the TON Network",
  description:
    "The best utility bot on the TON Network. Buy, swap, or sell TON using our secure wallet with Web2 payment integration and comprehensive developer API.",
  keywords: [
    "TonderBot",
    "TON Network",
    "cryptocurrency bot",
    "DeFi",
    "swap",
    "buy TON",
    "sell TON",
    "Web3 payments",
    "developer API",
  ],
  alternates: {
    canonical: "/bot",
  },
  openGraph: {
    type: "website",
    title: "TonderBot - Best Utility Bot on the TON Network",
    url: "https://tonderlabs.com/bot",
    description:
      "The best utility bot on the TON Network. Buy, swap, or sell TON using our secure wallet with Web2 payment integration and comprehensive developer API.",
    images: [
      {
        url: "https://tonderlabs.com/bot.png",
        width: 1200,
        height: 630,
        alt: "TonderBot - TON Network Utility Bot",
      },
    ],
    siteName: "TonderLabs",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tonderlabs",
    creator: "@tonderlabs",
    title: "TonderBot - Best Utility Bot on the TON Network",
    description:
      "The best utility bot on the TON Network. Buy, swap, or sell TON using our secure wallet with Web2 payment integration.",
    images: [
      {
        url: "https://tonderlabs.com/bot.png",
        width: 1200,
        height: 630,
        alt: "TonderBot - TON Network Utility Bot",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TonderBot",
    description:
      "The best utility bot on the TON Network for buying, swapping, and selling TON cryptocurrency with Web2 payment integration.",
    url: "https://tonderlabs.com/bot",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to use utility bot for TON Network",
    },
    creator: {
      "@type": "Organization",
      name: "TonderLabs",
      url: "https://tonderlabs.com",
    },
    featureList: [
      "Buy TON cryptocurrency",
      "Swap TON tokens",
      "Sell TON cryptocurrency",
      "Web2 payment integration",
      "Developer API access",
      "Secure wallet integration",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex justify-center">
        <div className="w-full lg:max-w-[100rem]">
          <HeroSection />
          <BuySwapOrSell />
          <IntroducingBot />
          <ParallaxSections />
          <GridSection />
          <StartTradingToday />
          <CTA />
        </div>
      </div>
    </>
  );
}
