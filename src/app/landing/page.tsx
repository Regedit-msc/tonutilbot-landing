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
    url: "https://tonderlabs.com",
    description:
      "We're a company dedicated to developing the best utility softwares on the TON Network",
    images: "https://drive.google.com/uc?export=view&id=1k_kcrD4DGA5NcVJ0Y5kI912qyQEJ-CHK",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    images: "https://drive.google.com/uc?export=view&id=1k_kcrD4DGA5NcVJ0Y5kI912qyQEJ-CHK",
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
