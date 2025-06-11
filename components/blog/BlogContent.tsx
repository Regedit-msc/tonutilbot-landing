"use client";

import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import Link from "next/link";

interface BlogContentProps {
  content: string;
}

export const BlogContent: FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert prose-blue max-w-none">
      <ReactMarkdown
        components={{
          // Custom heading components - Map markdown h1 to h2 to avoid nesting with page title
          h1: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 mt-6 sm:mt-8 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8 text-white border-b border-gray-700 pb-2">
              {children}
            </h3>
          ),
          h3: ({ children }) => (
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 mt-4 sm:mt-6 text-gray-100">
              {children}
            </h4>
          ),
          h4: ({ children }) => (
            <h5 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 mt-3 sm:mt-4 text-gray-200">
              {children}
            </h5>
          ),

          // Custom paragraph styling
          p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
              {children}
            </p>
          ),

          // Custom list styling
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {children}
            </li>
          ),

          // Custom link styling
          a: ({ href, children }) => (
            <Link
              href={href || "#"}
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </Link>
          ),

          // Custom blockquote styling
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 sm:pl-6 py-2 my-4 sm:my-6 bg-gray-800/50 rounded-r-lg">
              <div className="text-gray-300 italic text-sm sm:text-base">
                {children}
              </div>
            </blockquote>
          ),

          // Custom code styling
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <div className="my-4 sm:my-6 overflow-x-auto">
                {/* @ts-ignore */}
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-lg text-xs sm:text-sm"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="bg-gray-800 text-blue-300 px-1 sm:px-2 py-1 rounded text-xs sm:text-sm font-mono">
                {children}
              </code>
            );
          },

          // Custom image styling
          img: ({ src, alt }) => (
            <div className="my-6 sm:my-8">
              <Image
                src={src || ""}
                alt={alt || ""}
                width={800}
                height={400}
                className="rounded-lg w-full h-auto"
              />
              {alt && (
                <p className="text-center text-xs sm:text-sm text-gray-400 mt-2 italic">
                  {alt}
                </p>
              )}
            </div>
          ),

          // Custom table styling
          table: ({ children }) => (
            <div className="my-4 sm:my-6 overflow-x-auto">
              <table className="min-w-full border border-gray-700 rounded-lg text-xs sm:text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-800">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="bg-gray-900">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-gray-700">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-200">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-300">
              {children}
            </td>
          ),

          // Custom horizontal rule
          hr: () => <hr className="my-6 sm:my-8 border-gray-700" />,

          // Custom strong/bold styling
          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),

          // Custom emphasis/italic styling
          em: ({ children }) => (
            <em className="italic text-gray-200">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
