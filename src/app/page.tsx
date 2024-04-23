import Hero from "@/components/landing-components/Hero";
import OurProcess from "@/components/landing-components/OurProcess";
import { CTA } from "@components/cta/CTA";
import FeaturedProducts from "@components/landing-components/FeaturedProducts";
import OurTeam from "@components/landing-components/OurTeam";
import WeBuildSolutionsForWeb3 from "@components/landing-components/WeBuildSolutionsForWeb3";

export default function Home() {
  return (
    <>
      <div className="bg-ashy min-h-screen">
        <Hero />
        <OurProcess />
        <FeaturedProducts />
        <OurTeam />
        <WeBuildSolutionsForWeb3 />
        <CTA text={` TonderLabs technologies ${new Date().getFullYear()}...`} />
      </div>
    </>
  );
}
