import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | TonderLabs",
  description:
    "The page you're looking for doesn't exist. Return to TonderLabs homepage to explore our Web3 solutions for the TON Network.",
  robots: {
    index: false,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ashy flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. It might
            have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Go to Homepage
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bot"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              TonderBot
            </Link>
            <Link
              href="/#about"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            If you believe this is an error, please{" "}
            <Link
              href="/#contact"
              className="text-blue-400 hover:text-blue-300"
            >
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
