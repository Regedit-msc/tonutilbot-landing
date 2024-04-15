import { Navbar } from "@components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import prismLight from "@/assets/herolight.svg";

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


const myFont = localFont({
  src: [
    {
      path: "../../fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="overflow-x-hidden box-border">
        <Navbar />
        <img
          src={prismLight.src}
          alt="Mesh Image"
          className="absolute sm:h-fit w-full h-[40rem] -lg:top-96"
        />
        {children}
      </body>
    </html>
  );
}
