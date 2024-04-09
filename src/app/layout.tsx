import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ton Bot",
  description:
    "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
  openGraph: {
    title: " Ton Bot",
    url: "",
    description:
      "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
    images: [
      `https://drive.google.com/uc?id=1sC4Y882TEs30ynQUuTP4HRdkObfgbKdy`,
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    images: "https://drive.google.com/uc?id=1sC4Y882TEs30ynQUuTP4HRdkObfgbKdy",
    description:
      "Best Utility Bot on the TON Network. Buy, Swap or Sell TON using our wallet along with web2 payments and developer API integration.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
