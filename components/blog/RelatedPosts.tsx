"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogType } from "@types";
import { GradientText } from "@components/special_text/GradientText";

// Local function to extract excerpt
function extractExcerpt(content: string, maxLength: number = 120): string {
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
}

interface RelatedPostsProps {
  posts: BlogType[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="mt-16 pt-16 border-t border-white/10">
      <div className="mb-8">
        <GradientText className="text-3xl font-bold">
          Related Articles
        </GradientText>
        <p className="text-white/70 mt-2">
          Continue exploring our insights and updates
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="bg-ashy/30 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 hover:transform hover:scale-[1.02]">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-white/60">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                    <span>{post.author.name}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-white/70 text-sm line-clamp-3">
                    {extractExcerpt(post.content, 120)}
                  </p>

                  <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    Read more
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
