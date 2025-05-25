import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { GradientText } from "@/components/special_text/GradientText";
import { DarkButton } from "@/components/buttons/DarkButton";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogShare } from "@/components/blog/BlogShare";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { siteConfig } from "@/lib/seo";
import {
  getBlogPost,
  getAllBlogSlugs,
  calculateReadTime,
  getRelatedPosts,
} from "@/lib/blog";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for static site generation
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const baseUrl = siteConfig.url;
  const ogImage = post.image
    ? `${baseUrl}${post.image}`
    : `${baseUrl}/og/blog.jpg`;

  return {
    title: `${post.title} | ${siteConfig.name} Blog`,
    description: post.description,
    keywords: [...siteConfig.keywords, post.category, "blog", "article"],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: [post.category],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `${baseUrl}/blog/${slug}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
      creator: "@tonderlabs",
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const readTime = calculateReadTime(post.content);
  const relatedPosts = await getRelatedPosts(slug, post.category, 3);

  // JSON-LD structured data for the blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image
      ? `${siteConfig.url}${post.image}`
      : `${siteConfig.url}/og/blog.jpg`,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    wordCount: post.content.split(" ").length,
    genre: post.category,
    keywords: [post.category, "TON", "blockchain", "Web3"],
  };

  return (
    <>
      {/* Temporarily disabled JSON-LD for debugging
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      */}

      <div className="min-h-screen bg-ashy text-white">
        {/* Navigation Breadcrumb */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white">{post.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 pb-12">
          <header className="max-w-4xl mx-auto text-center mb-12">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 mb-6">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <GradientText>{post.title}</GradientText>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex items-center justify-center space-x-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{readTime} min read</span>
            </div>

            {/* Hero Image */}
            {post.image && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}

            {/* Share Buttons */}
            <BlogShare
              title={post.title}
              url={`${siteConfig.url}/blog/${slug}`}
              description={post.description}
            />
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert prose-blue max-w-none">
              <BlogContent content={post.content} />
            </div>

            {/* Author Card */}
            <div className="mt-16">
              <AuthorCard
                author={post.author}
                publishedAt={post.publishedAt}
                readTime={readTime}
              />
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <RelatedPosts posts={relatedPosts} />
            </div>

            {/* Back to Blog */}
            <div className="mt-16 text-center">
              <Link href="/blog">
                <DarkButton text="← Back to Blog" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
