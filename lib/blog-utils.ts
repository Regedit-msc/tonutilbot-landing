import { BlogType } from "@/types";

// Sample blog posts data
const sampleBlogPosts: BlogType[] = [
  {
    slug: "tonderbot-revolutionizing-ton-ecosystem",
    title:
      "TonderBot: Revolutionizing the TON Ecosystem with Advanced Utility Features",
    description:
      "Discover how TonderBot is transforming the TON Network with its comprehensive utility features, seamless wallet integration, and developer-friendly API.",
    image: "/blog/tonderbot-ecosystem.jpg",
    publishedAt: "2025-05-20",
    updatedAt: "2025-05-20",
    category: "Product",
    author: {
      name: "TonderLabs Team",
      avatar: "/team/tonderlabs-avatar.png",
      bio: "The innovative team behind TonderBot and TonderLabs, dedicated to building next-generation Web3 solutions on the TON Network.",
    },
    content:
      "# TonderBot: Revolutionizing the TON Ecosystem\n\nThe TON Network has emerged as one of the most promising blockchain platforms, offering unprecedented speed, scalability, and user-friendly features. At TonderLabs, we've been working tirelessly to build solutions that not only leverage TON's capabilities but also push the boundaries of what's possible in the Web3 space.\n\n## The Vision Behind TonderBot\n\nTonderBot represents our commitment to creating a comprehensive utility platform that bridges the gap between Web2 and Web3 experiences. Our goal is simple: make blockchain technology accessible, powerful, and enjoyable for everyone.\n\n### Key Features That Set TonderBot Apart\n\n#### 1. Seamless Wallet Integration\nOur wallet integration goes beyond basic connectivity. TonderBot provides:\n- Multi-wallet support for various TON wallets\n- One-click transactions with intelligent gas optimization\n- Portfolio management with real-time balance tracking\n- Transaction history with detailed analytics\n\n#### 2. Advanced DeFi Utilities\nTonderBot brings sophisticated DeFi features to your fingertips:\n- Automated trading strategies with customizable parameters\n- Yield farming optimization across multiple protocols\n- Risk assessment tools for informed decision-making\n- Cross-chain bridge functionality for maximum flexibility\n\n#### 3. Developer-Friendly API\nOur comprehensive API enables developers to:\n- Build custom integrations with minimal effort\n- Access real-time market data and analytics\n- Implement automated trading logic with robust security\n- Create personalized user experiences on the TON Network\n\nReady to experience the future of TON utilities? Join thousands of users who have already discovered the power of TonderBot.",
  },
  {
    slug: "building-web3-solutions-ton-network",
    title: "Building Web3 Solutions on the TON Network: Our Journey and Vision",
    description:
      "Learn about TonderLabs' mission to bridge Web2 and Web3 through innovative solutions built on the TON Network.",
    image: "/blog/web3-solutions.jpg",
    publishedAt: "2025-05-15",
    updatedAt: "2025-05-15",
    category: "Company",
    author: {
      name: "TonderLabs Team",
      avatar: "/team/tonderlabs-avatar.png",
      bio: "The innovative team behind TonderBot and TonderLabs, dedicated to building next-generation Web3 solutions on the TON Network.",
    },
    content:
      "# Building Web3 Solutions on the TON Network\n\nThe Web3 revolution is here, but for many users and developers, the transition from Web2 to Web3 remains challenging. At TonderLabs, we've made it our mission to bridge this gap by creating intuitive, powerful, and accessible solutions built on the TON Network.\n\n## Our Journey: From Vision to Reality\n\nWhen we first started TonderLabs, we recognized a fundamental problem in the Web3 space: despite the incredible potential of blockchain technology, the user experience was often complex, intimidating, and fragmented. We believed that for Web3 to reach mainstream adoption, it needed to be as seamless and user-friendly as the Web2 applications people use every day.\n\n### The TON Network Advantage\n\nWe chose to build on the TON Network for several compelling reasons:\n\n#### Unparalleled Performance\n- High throughput with millions of transactions per second capability\n- Low latency for near-instant transaction confirmations\n- Dynamic sharding that scales automatically with network demand\n- Efficient resource utilization keeping costs minimal\n\n#### Developer-Friendly Environment\n- Comprehensive documentation and development tools\n- FunC programming language designed specifically for smart contracts\n- Robust testing frameworks for secure development\n- Active community support for collaborative growth\n\nReady to be part of the Web3 revolution? Explore our current opportunities and discover how you can contribute to the future we're building together.",
  },
  {
    slug: "future-defi-ton-network",
    title: "The Future of DeFi on TON: Innovation, Security, and Scalability",
    description:
      "Explore how TonderLabs is pioneering the next generation of DeFi solutions on the TON Network with advanced protocols and enterprise-grade security.",
    image: "/blog/defi-future-ton.jpg",
    publishedAt: "2025-05-10",
    updatedAt: "2025-05-10",
    category: "Technology",
    author: {
      name: "TonderLabs Team",
      avatar: "/team/tonderlabs-avatar.png",
      bio: "The innovative team behind TonderBot and TonderLabs, dedicated to building next-generation Web3 solutions on the TON Network.",
    },
    content:
      "# The Future of DeFi on TON: Innovation, Security, and Scalability\n\nDecentralized Finance (DeFi) has fundamentally transformed the financial landscape, offering unprecedented access to financial services without traditional intermediaries. As we look toward the future, the TON Network emerges as a powerhouse platform poised to address many of DeFi's current limitations while unlocking new possibilities for innovation.\n\n## The Current State of DeFi\n\nDeFi has achieved remarkable milestones:\n- Over $200 billion in total value locked across protocols\n- Thousands of applications serving millions of users globally\n- 24/7 accessibility without geographical restrictions\n- Programmable money enabling complex financial instruments\n\nHowever, significant challenges remain:\n\n### Scalability Constraints\nMost DeFi protocols operate on networks with limited throughput, leading to:\n- High transaction fees during peak usage\n- Slow confirmation times\n- Network congestion affecting user experience\n- Barriers to mainstream adoption\n\n### Security Vulnerabilities\nThe rapid pace of DeFi innovation has sometimes come at the cost of security:\n- Smart contract vulnerabilities leading to exploits\n- Complex interactions creating unexpected attack vectors\n- Insufficient auditing of novel protocols\n- User education gaps regarding security best practices\n\nJoin us as we build this future together. The next generation of DeFi starts now.",
  },
];

// Blog utility functions
const blogUtils = {
  async getAllBlogSlugs(): Promise<string[]> {
    return sampleBlogPosts.map((post) => post.slug);
  },

  async getBlogPost(slug: string): Promise<BlogType | null> {
    const post = sampleBlogPosts.find((post) => post.slug === slug);
    return post || null;
  },

  async getAllBlogPosts(): Promise<BlogType[]> {
    return sampleBlogPosts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  },

  async getBlogPostsByCategory(category: string): Promise<BlogType[]> {
    const allPosts = await this.getAllBlogPosts();
    return allPosts.filter((post) => post.category === category);
  },

  async getRelatedPosts(
    currentSlug: string,
    category: string,
    limit: number = 3
  ): Promise<BlogType[]> {
    const allPosts = await this.getAllBlogPosts();
    return allPosts
      .filter((post) => post.slug !== currentSlug && post.category === category)
      .slice(0, limit);
  },

  calculateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  },

  extractExcerpt(content: string, maxLength: number = 150): string {
    const plainText = content
      .replace(/#{1,6}\s/g, "") // Remove markdown headers
      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown
      .replace(/\*(.*?)\*/g, "$1") // Remove italic markdown
      .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links, keep text
      .replace(/```[\s\S]*?```/g, "") // Remove code blocks
      .replace(/`(.*?)`/g, "$1") // Remove inline code
      .trim();

    if (plainText.length <= maxLength) {
      return plainText;
    }

    return plainText.substring(0, maxLength).trim() + "...";
  },
};

// Named exports
export const getAllBlogSlugs = blogUtils.getAllBlogSlugs.bind(blogUtils);
export const getBlogPost = blogUtils.getBlogPost.bind(blogUtils);
export const getAllBlogPosts = blogUtils.getAllBlogPosts.bind(blogUtils);
export const getBlogPostsByCategory =
  blogUtils.getBlogPostsByCategory.bind(blogUtils);
export const getRelatedPosts = blogUtils.getRelatedPosts.bind(blogUtils);
export const calculateReadTime = blogUtils.calculateReadTime.bind(blogUtils);
export const extractExcerpt = blogUtils.extractExcerpt.bind(blogUtils);

// Default export
export default blogUtils;
