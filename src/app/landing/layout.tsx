import { Navbar } from "@components/navbar/Navbar";
import prismLight from "@/assets/herolight.svg";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../../../fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../fonts/Poppins/Poppins-Medium.ttf",
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
