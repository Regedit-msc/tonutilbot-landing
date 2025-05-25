"use client";

import { FC } from "react";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  CopyIcon,
  MessageCircleIcon,
} from "lucide-react";

interface BlogShareProps {
  title: string;
  url: string;
  description: string;
}

export const BlogShare: FC<BlogShareProps> = ({ title, url, description }) => {
  const handleShare = (platform: string) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    const encodedDescription = encodeURIComponent(description);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url).then(() => {
        // You could add a toast notification here
        alert("URL copied to clipboard!");
      });
      return;
    }

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(
        shareUrls[platform as keyof typeof shareUrls],
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <span className="text-sm text-gray-400 mr-2">Share:</span>

      {/* Twitter */}
      <button
        onClick={() => handleShare("twitter")}
        className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors group"
        aria-label="Share on Twitter"
      >
        <TwitterIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
      </button>

      {/* Facebook */}
      <button
        onClick={() => handleShare("facebook")}
        className="p-2 rounded-lg bg-gray-800 hover:bg-blue-800 transition-colors group"
        aria-label="Share on Facebook"
      >
        <FacebookIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
      </button>

      {/* LinkedIn */}
      <button
        onClick={() => handleShare("linkedin")}
        className="p-2 rounded-lg bg-gray-800 hover:bg-blue-700 transition-colors group"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
      </button>

      {/* Telegram */}
      <button
        onClick={() => handleShare("telegram")}
        className="p-2 rounded-lg bg-gray-800 hover:bg-blue-500 transition-colors group"
        aria-label="Share on Telegram"
      >
        <MessageCircleIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
      </button>

      {/* Copy Link */}
      <button
        onClick={() => handleShare("copy")}
        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-600 transition-colors group"
        aria-label="Copy link"
      >
        <CopyIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
      </button>
    </div>
  );
};
