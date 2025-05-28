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
    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-ashy/50 rounded-xl sm:rounded-2xl border border-white/10 mx-4 sm:mx-0">
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0 text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
          {author.name}
        </h3>

        <p className="text-xs sm:text-sm text-white/70 mb-2 sm:mb-3 line-clamp-2">
          {author.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-xs sm:text-sm text-white/60">
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>

          <span className="hidden sm:inline w-1 h-1 bg-white/40 rounded-full"></span>

          <span>{readTime} min read</span>
        </div>
      </div>
    </div>
  );
}
