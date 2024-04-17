/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@components/navbar/Navbar";
import "./globals.css";
import localFont from "next/font/local";
import prismLight from "@/assets/herolight.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TonderLabs",
  description: "Building Web3 solutions for the TON Network",
  openGraph: {
    title: "TonderLabs",
    url: "https://tonderlabs.com",
    description:
      "We're a company dedicated to developing the best utility software on the TON Network",
    images:
      "https://drive.google.com/uc?export=view&id=1k_kcrD4DGA5NcVJ0Y5kI912qyQEJ-CHK",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    images:
      "https://drive.google.com/uc?export=view&id=1k_kcrD4DGA5NcVJ0Y5kI912qyQEJ-CHK",
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
      <body className="bg-ashy overflow-x-hidden box-border">
        <Navbar />
        <img
          src={prismLight.src}
          alt="prism light image"
          className="absolute sm:h-fit w-full h-[40rem] top-0"
        />
        {/* <img
          src={mesh.src}
          alt="Mesh Image"
          className="absolute w-full h-[40rem] sm:h-full -lg:top-96 opacity-50"
        /> */}
        {children}
      </body>
    </html>
  );
}
