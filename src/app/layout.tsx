import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrim: Earn, Shop, Swap, and Transfer Globally!",
  description:
    "Sending value directly to your Freelancers, Content Creators, Crush using their social identity.",
  openGraph: {
    title: "Scrim: Earn, Shop, Swap, and Transfer Globally!",
    url: "https://scrim.ai/",
    description:
      "The ultimate financial playground! Earn, shop, swap crypto, and send global transfers effortlessly with Scrim. Join now and revolutionize your financial journey.",
    images: [
      `https://drive.google.com/uc?id=1sC4Y882TEs30ynQUuTP4HRdkObfgbKdy`,
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sendscrim",
    creator: "@sendscrim",
    images: "https://drive.google.com/uc?id=1sC4Y882TEs30ynQUuTP4HRdkObfgbKdy",
    description:
      "The ultimate financial playground! Earn, shop, swap crypto, and send global transfers effortlessly with Scrim. Join now and revolutionize your financial journey.",
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
