/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientButton } from "@components/buttons/GradientButton";
import docs from "@/assets/docs.svg";
import { GradientText } from "@components/special_text/GradientText";
import { IoDocumentText } from "react-icons/io5";
import DeveloperApiPic from "@assets/DeveloperApiIntegration.png";
import DeveloperApiPic2 from "@assets/DeveloperApiIntegration2.png";
import mesh from "@assets/mesh.png";

export const DeveloperApiIntegration = () => {
  return (
    <div className=" text-white relative mt-[12rem] mb-52">
      <div className="flex flex-col justify-center items-center text-center gap-6 relative">
        <img
          src={DeveloperApiPic.src}
          alt="DeveloperApi Image"
          className="scale-[0.55] sm:scale-[0.7] absolute top-[-5.75rem] -z-0 bg-myGray"
        />
        <img
          src={DeveloperApiPic2.src}
          alt="DeveloperApi Image"
          className="scale-[0.55] sm:scale-[0.7] absolute top-[-5.75rem] -z-0 bg-myGray"
        />

        <div className="bg-myGray w-full h-full absolute top-[3.3rem] z-10"></div>
        {/* <img
          src={mesh.src}
          className="absolute bottom-auto left-auto z-10  "
          alt="MeshGradient Image"
        /> */}

        <GradientText className="sm:w-3/4 text-center sm:mb-5 lg:text-[4rem] mt-14 pt-4 pb-2 z-50 md:text-6xl text-[2.5rem] tracking-tighter leading-[0.9] shadow-myGray shadow-[0px_-5px_20px_15px_myGray] bg-gradient-to-tr from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
          Developer API <br />
          integration
        </GradientText>

        <p className="leading-[1.8] text-white z-10 sm:text-lg font-normal text-[0.85rem]">
          Developers can easily integrate our API’s into{" "}
          <br className="flex sm:hidden" /> their{" "}
          <br className="sm:flex hidden" /> various infrastructures.
        </p>

        <GradientButton
          text="Read our Documentation"
          className="text-[0.6rem] sm:text-sm mt-3 sm:mt-6"
          isIcon={false}
          myIcon={docs}
        />
      </div>
    </div>
  );
};
