import Hero from "@/components/landing-components/Hero";
import OurProcess from "@/components/landing-components/OurProcess";
import FeaturedProducts from "@components/landing-components/FeaturedProducts";
import OurTeam from "@components/landing-components/OurTeam";
import WeBuildSolutionsForWeb3 from "@components/landing-components/WeBuildSolutionsForWeb3";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TonderLabs",
  description: "Building Web3 solutions for the TON Network",
  openGraph: {
    title: "TonderLabs",
    url: "1epq8gOSlrasoT2fkLcxQvTTZby4LcSf7",
    description:
      "We're a company dedicated to developing the best utility softwares on the TON Network",
    images: `1epFRG7uzatcvGEzaxCgb-TyWqy1lSMzn`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    images: "1epFRG7uzatcvGEzaxCgb-TyWqy1lSMzn",
    description: "Building Web3 solutions for the TON Network",
  },
};

export default function Home() {
  return (
    <>
      <div className="bg-ashy min-h-screen">
        <Hero />
        <OurProcess />
        <FeaturedProducts />
        <OurTeam />
        <WeBuildSolutionsForWeb3 />
      </div>
    </>
  );
}
