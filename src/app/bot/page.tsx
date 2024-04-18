/* eslint-disable @next/next/no-img-element */
import { HeroSection } from "@components/bot_components/HeroSection";
import { BuySwapOrSell } from "@components/bot_components/BuySwapOrSell";
import { ThirdPartyWeb2Payments } from "@components/bot_components/ThirdPartyWeb2Payments";
import { DeveloperApiIntegration } from "@components/bot_components/DeveloperApiIntegration";
import { ProjectRoadmap } from "@components/bot_components/ProjectRoadmap";
import { OpenTonbotOnTg } from "@components/bot_components/OpenTonbotOnTg";
import { CTA } from "@components/cta/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tonder Bot",
  description:
    "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
  openGraph: {
    title: "Tonder Bot",
    url: "https://tonderlabs.com/bot",
    description:
      "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
    images:
      "https://tonderlabs.com/bot.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    images:
      "https://tonderlabs.com/bot.png",
    description:
      "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
  },
};

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="mx-5 w-full lg:max-w-[70rem]">
          <HeroSection />
          <BuySwapOrSell />
          <ThirdPartyWeb2Payments />
          <DeveloperApiIntegration />
          <ProjectRoadmap />
          <div className="flex justify-center items-center">
            <OpenTonbotOnTg />
          </div>
          <CTA />
        </div>
      </div>
    </>
  );
}
