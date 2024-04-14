/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientButton } from "@components/buttons/GradientButton";
import { GradientText } from "@components/special_text/GradientText";
import { IoDocumentText } from "react-icons/io5";
import DeveloperApiPic from "@assets/DeveloperApiIntegration.png";
import DeveloperApiPic2 from "@assets/DeveloperApiIntegration2.png";
import mesh from "@assets/mesh.png";

export const DeveloperApiIntegration = () => {
  return (
    <div className="text-white relative mt-[12rem] mb-64">
      <div className="flex flex-col justify-center items-center text-center gap-10 mt-[20%] mb-[15%] max-md:my-24 relative">
        <img
          src={DeveloperApiPic.src}
          alt="DeveloperApi Image"
          className="scale-[.5] absolute top-[-6rem] -z-0"
        />
        <img
          src={DeveloperApiPic2.src}
          alt="DeveloperApi Image"
          className="scale-[.5] absolute top-[-6rem] -z-0"
        />

        <div className="bg-[#000] w-full h-full absolute top-[4rem]  z-10"></div>
        <img
          src={mesh.src}
          className="absolute bottom-auto left-auto z-10  "
          alt="MeshGradient Image"
        />

      

        <GradientText
          text="Developer API integration"
          className="w-[60%] max-md:w-[80%] text-center md:mb-5 lg:text-7xl bg-[#00000063] mt-16 pt-6 pb-2 z-50 md:text-6xl text-[2.5rem] tracking-tighter leading-[0.9] shadow-black shadow-[0px_-10px_40px_10px_#00000060] bg-gradient-to-tr from-white via-gray-300 to-gray-600 bg-clip-text text-transparent"
        />

        <p className="text-white lg:w-[70%] w-3/4 -mt-2 -mb-2 z-10 sm:text-2xl font-normal lg:leading-[33px] text-xs">
          Developers can easily integrate our API’s into their various
          infrastructures.
        </p>

        <GradientButton
          icon={<IoDocumentText className="text-sm" />}
          text="Read our Documentation"
          className="text-[0.6rem]"
        />
      </div>
    </div>
  );
};
