/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@components/navbar/Navbar";
import "./globals.css";
import localFont from "next/font/local";
import light from "@/assets/light.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TonderLabs",
  description: "Building Web3 solutions for the TON Network",
  openGraph: {
    title: "TonderLabs",
    url: "https://tonderlabs.com",
    description:
      "We're a company dedicated to developing the best utility software on the TON Network",
    images: "https://tonderlabs.com/tonderlabs.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    images: "https://tonderlabs.com/tonderlabs.png",
    description: "Building Web3 solutions for the TON Network",
  },
};

const poppinsFont = localFont({
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
    <html lang="en" className={poppinsFont.className}>
      <body className="bg-ashy w-full overflow-x-hidden box-border">
        <Navbar />
        <img
          src={light.src}
          alt="prism light image"
          className="absolute sm:h-fit w-full h-[40rem] top-0 opacity-85 sm:w-[70vw] sm:top-20 md:top-0 sm:left-[15vw] lg:w-[50vw] lg:left-[25vw]"
        />
        {children}
      </body>
    </html>
  );
}
