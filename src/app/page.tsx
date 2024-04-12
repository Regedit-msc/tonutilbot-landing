/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@components/navbar/Navbar";
import { HeroSection } from "@components/home_components/HeroSection";
import { BuySwapOrSell } from "@components/home_components/BuySwapOrSell";
import { ThirdPartyWeb2Payments } from "@components/home_components/ThirdPartyWeb2Payments";
import { DeveloperApiIntegration } from "@components/home_components/DeveloperApiIntegration";
import { ProjectRoadmap } from "@components/home_components/ProjectRoadmap";
import { OpenTonbotOnTg } from "@components/home_components/OpenTonbotOnTg";
import { CTA } from "@components/cta/CTA";

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen flex justify-center ">
        <div className="max-w-7xl mx-5 w-full">
          <Navbar />
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
