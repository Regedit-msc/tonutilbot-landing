import Hero from "@/components/landing-components/Hero";
import OurProcess from "@/components/landing-components/OurProcess";
import { CTA } from "@components/cta/CTA";
import FeaturedProducts from "@components/landing-components/FeaturedProducts";
import OurTeam from "@components/landing-components/OurTeam";
import WeBuildSolutionsForWeb3 from "@components/landing-components/WeBuildSolutionsForWeb3";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TonderLabs - Building Web3 Solutions for the TON Network",
    description:
      "We're a Web3 company dedicated to developing the best utility software on the TON network with innovative blockchain solutions.",
    url: "https://tonderlabs.com",
    mainEntity: {
      "@type": "Organization",
      name: "TonderLabs",
      description: "Building Web3 solutions for the TON Network",
      url: "https://tonderlabs.com",
      logo: "https://tonderlabs.com/tonderlabs.png",
      sameAs: [
        "https://t.me/tonderbot_news",
        "https://x.com/tonderlabs",
        "https://discord.com/invite/YdpyHVAr",
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tonderlabs.com",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
