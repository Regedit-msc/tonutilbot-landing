export const siteConfig = {
  name: "TonderLabs",
  title: "TonderLabs - Building Web3 Solutions for the TON Network",
  description:
    "Building Web3 solutions for the TON Network. We're a company dedicated to developing the best utility software on the TON Network with innovative blockchain solutions.",
  url: "https://tonderlabs.com",
  ogImage: "https://tonderlabs.com/tonderlabs.png",
  links: {
    twitter: "https://x.com/tonderlabs",
    telegram: "https://t.me/tonderbot_news",
    discord: "https://discord.com/invite/YdpyHVAr",
    docs: "https://docs.tonderlabs.com",
  },
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
    "crypto wallet",
    "TON ecosystem",
    "blockchain development",
  ],
};

export const botPageConfig = {
  title: "TonderBot - Best Utility Bot on the TON Network",
  description:
    "The best utility bot on the TON Network. Buy, swap, or sell TON using our secure wallet with Web2 payment integration and comprehensive developer API.",
  url: "https://tonderlabs.com/bot",
  ogImage: "https://tonderlabs.com/bot.png",
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
    "crypto trading bot",
    "TON wallet",
  ],
};

export function generateMetadata(
  config: typeof siteConfig | typeof botPageConfig,
  isBot = false
) {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: config.url,
      title: config.title,
      description: config.description,
      siteName: siteConfig.name,
      images: [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: isBot
            ? "TonderBot - TON Network Utility Bot"
            : "TonderLabs - Web3 Solutions for TON Network",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      site: "@tonderlabs",
      creator: "@tonderlabs",
      images: [config.ogImage],
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
}
