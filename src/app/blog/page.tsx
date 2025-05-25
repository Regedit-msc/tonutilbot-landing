import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GradientText } from "@/components/special_text/GradientText";
import { DarkButton } from "@/components/buttons/DarkButton";
import { CTA } from "@/components/cta/CTA";
import { siteConfig } from "@/lib/seo";
import { getAllBlogPosts, calculateReadTime } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - TonderLabs",
  description:
    "Stay updated with the latest insights, tutorials, and news from TonderLabs about Web3, TON Network, and blockchain technology.",
  keywords: [
    ...siteConfig.keywords,
    "blog",
    "tutorials",
    "Web3 insights",
    "blockchain news",
    "TON tutorials",
    "DeFi guides",
  ],
  openGraph: {
    title: "Blog - TonderLabs",
    description:
      "Stay updated with the latest insights, tutorials, and news from TonderLabs about Web3, TON Network, and blockchain technology.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/blog/blog-og.jpg`,
        width: 1200,
        height: 630,
        alt: "TonderLabs Blog - Web3 Insights and Tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - TonderLabs",
    description:
      "Stay updated with the latest insights, tutorials, and news from TonderLabs about Web3, TON Network, and blockchain technology.",
    site: "@tonderlabs",
    creator: "@tonderlabs",
    images: [`${siteConfig.url}/blog/blog-og.jpg`],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "TonderLabs Blog",
    description:
      "Stay updated with the latest insights, tutorials, and news from TonderLabs about Web3, TON Network, and blockchain technology.",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.ogImage,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: post.author.name,
      },
      image: `${siteConfig.url}${post.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-ashy min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white px-6 sm:px-8 lg:px-16 pt-32 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center text-center gap-6 relative">
              <DarkButton text="INSIGHTS" isIcon={false} />
              <GradientText
                text="Latest Insights &amp; Tutorials"
                className="lg:text-[4.5rem] max-w-4xl"
              />
              <p className="text-gray-300 text-lg lg:text-xl max-w-3xl leading-relaxed">
                Stay updated with the latest insights, tutorials, and news about
                Web3, TON Network, and blockchain technology from the TonderLabs
                team.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="px-6 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Featured Post
              </h2>
            </div>
            <Link href={`/blog/${blogPosts[0].slug}`} className="group">
              <article className="bg-white/5 border border-ashyBorder/50 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2">
                <div className="aspect-video relative overflow-hidden">
                  {blogPosts[0].image &&
                  !blogPosts[0].image.startsWith("data:image/svg+xml") ? (
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9]"></div>
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {blogPosts[0].category}
                    </span>
                    <h3 className="text-white text-2xl lg:text-3xl font-bold leading-tight">
                      {blogPosts[0].title}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {blogPosts[0].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#3DB3FC] to-[#936BF9] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">TL</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {blogPosts[0].author.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {new Date(
                            blogPosts[0].publishedAt
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {calculateReadTime(blogPosts[0].content)} min read
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section className="px-6 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Recent Posts
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white/5 border border-ashyBorder/50 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      {post.image &&
                      !post.image.startsWith("data:image/svg+xml") ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9]"></div>
                      )}
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#3DB3FC] to-[#936BF9] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">
                              TL
                            </span>
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">
                              {post.author.name}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {new Date(post.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                        <span className="text-gray-400 text-sm">
                          {calculateReadTime(post.content)} min read
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-6 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                  Stay Updated
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Get the latest insights and updates from TonderLabs delivered
                  to your inbox.
                </p>
                <Link
                  href="https://t.me/tonderbot_news"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </div>
    </>
  );
}
