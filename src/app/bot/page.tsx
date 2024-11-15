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

export const metadata: Metadata = {
  title: "Tonder Bot",
  description:
    "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
  openGraph: {
    title: "Tonder Bot",
    url: "https://tonderlabs.com/bot",
    description:
      "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
    images: "https://tonderlabs.com/bot.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    images: "https://tonderlabs.com/bot.png",
    description:
      "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
  },
};

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full lg:max-w-[100rem]">
          <HeroSection />
          <BuySwapOrSell />
          <IntroducingBot />
          <ParallaxSections />
          <GridSection />
          <div className="flex justify-center items-center">
            <OpenTonbotOnTg />
          </div>

          <CTA />
        </div>
      </div>
    </>
  );
}
