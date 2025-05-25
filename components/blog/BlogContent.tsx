"use client";

import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import Link from "next/link";

interface BlogContentProps {
  content: string;
}

export const BlogContent: FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg prose-invert prose-blue max-w-none">
      <ReactMarkdown
        components={{
          // Custom heading components
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 mt-8 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-4 mt-8 text-white border-b border-gray-700 pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-100">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold mb-2 mt-4 text-gray-200">
              {children}
            </h4>
          ),

          // Custom paragraph styling
          p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              {children}
            </p>
          ),

          // Custom list styling
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300 leading-relaxed">{children}</li>
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
            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-gray-800/50 rounded-r-lg">
              <div className="text-gray-300 italic">{children}</div>
            </blockquote>
          ),

          // Custom code styling
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <div className="my-6">
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-lg"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            );
          },

          // Custom image styling
          img: ({ src, alt }) => (
            <div className="my-8">
              <Image
                src={src || ""}
                alt={alt || ""}
                width={800}
                height={400}
                className="rounded-lg w-full h-auto"
              />
              {alt && (
                <p className="text-center text-sm text-gray-400 mt-2 italic">
                  {alt}
                </p>
              )}
            </div>
          ),

          // Custom table styling
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full border border-gray-700 rounded-lg">
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
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-gray-300">{children}</td>
          ),

          // Custom horizontal rule
          hr: () => <hr className="my-8 border-gray-700" />,

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
