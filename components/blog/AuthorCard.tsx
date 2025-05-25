"use client";

import Image from "next/image";
import { BlogType } from "@types";

interface AuthorCardProps {
  author: BlogType["author"];
  publishedAt: string;
  readTime: number;
}

export function AuthorCard({ author, publishedAt, readTime }: AuthorCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex items-start gap-4 p-6 bg-ashy/50 rounded-2xl border border-white/10">
      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-white mb-1">{author.name}</h3>

        <p className="text-sm text-white/70 mb-3 line-clamp-2">{author.bio}</p>

        <div className="flex items-center gap-4 text-sm text-white/60">
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>

          <span className="w-1 h-1 bg-white/40 rounded-full"></span>

          <span>{readTime} min read</span>
        </div>
      </div>
    </div>
  );
}
