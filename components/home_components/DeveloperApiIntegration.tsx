/* eslint-disable @next/next/no-img-element */

import { GradientButton } from "@components/buttons/GradientButton";
import { GradientText } from "@components/special_text/GradientText";
import { IoDocumentText } from "react-icons/io5";
import DeveloperApiPic from "@assets/DeveloperApiIntegration.png";
import DeveloperApiPic2 from "@assets/DeveloperApiIntegration2.png";
import mesh from "@assets/mesh.png";
import light from "@assets/light.svg";

export const DeveloperApiIntegration = () => {
  return (
    <div className="text-white relative max-md:mt-72 mb-64">
      <div className="flex flex-col justify-center items-center text-center gap-10 mt-[20%] mb-[15%] max-md:my-24 relative">
        <img
          src={DeveloperApiPic.src}
          alt="DeveloperApi Image"
          className=" absolute top-[-6rem] -z-0"
        />
        <img
          src={DeveloperApiPic2.src}
          alt="DeveloperApi Image"
          className=" absolute  top-[-6rem] -z-0"
        />

        <div className="bg-[#000] w-full h-full absolute top-[4rem]  z-10"></div>
        <img
          src={mesh.src}
          className="absolute bottom-auto left-auto z-10  "
          alt="MeshGradient Image"
        />

        <img
          src={light.src}
          className="mt-20 absolute opacity-45 z-10"
          alt="LightGradient Image"
        />

        <GradientText
          text="Developer API integration"
          className="w-[60%] max-md:w-[80%] text-center md:mb-5 lg:text-7xl bg-[#00000063] mt-16 pt-4 z-50 lg:text-[80px] md:text-6xl text-5xl shadow-black shadow-[0px_-30px_40px_20px_#00000060] bg-gradient-to-tr from-white via-gray-300 to-gray-600 bg-clip-text text-transparent"
        />

        <p className="text-white lg:w-[70%] w-4/5 my-5 max-sm:my-0 z-10 t sm:text-2xl font-medium lg:leading-[33px] text-base">
          Developers can easily integrate our API’s into their various
          infrastructures.
        </p>

        <GradientButton
          icon={<IoDocumentText className="text-sm" />}
          text="Read our Documentations"
          className="text-sm"
        />
      </div>
    </div>
  );
};
