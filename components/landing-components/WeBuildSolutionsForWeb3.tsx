/* eslint-disable @next/next/no-img-element */
import Transition from "@components/transitions";
import React, { FC } from "react";
import worlddextop from "@assets/landing-page/WeBuildSolutionsForWeb3/WorldDextop.png";
import worldTablet from "@assets/landing-page/WeBuildSolutionsForWeb3/World.svg";
import imageGroup from "@assets/landing-page/WeBuildSolutionsForWeb3/groupImageDextop.svg";
import { GradientText } from "@components/special_text/GradientText";

interface IProps {}

const WeBuildSolutionsForWeb3: FC<IProps> = () => {
  return (
    <Transition>
      <div
        className="text-white bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] 
      w-full flex justify-center items-center sm:mb-52 sm:mt-[16rem] my-[8.36rem] relative"
      >
        <img
          src={worlddextop.src}
          alt="Xmen Image"
          className="absolute -z-0 opacity-100 left-0 hidden md:block"
        />
        <img
          src={worldTablet.src}
          alt="Xmen Image"
          className="absolute -z-0 opacity-100 left-0 md:hidden h-full"
        />
        {/**left */}

        <div className="max-w-[73.3rem] ml-[2.19rem] mr-[1.69rem] flex flex-col md:flex-row lg:gap-[7rem] gap-[2.18rem] my-[5.69rem]">
          <div className="flex flex-col w-full">
            {" "}
            <button
              className="bg-gradient-to-b from-transparent
            to-white/20 shadow-none tracking-[0.4em] rounded-full py-[0.2rem] px-[0.9rem] 
              items-center text-white gap-2 w-fit transition-all  mb-[1.44rem]
              md:text-[1.25rem] text-[0.65956rem]"
            >
              OUR MISSION
            </button>
            <GradientText
              text={
                <>
                  We build <br /> solutions for <br /> Web3 on TON
                </>
              }
              className="lg:text-[4.5rem] z-10 leading-[0.95] text-[1.95rem] sm:text-[2.25rem] md:text-[2.75rem] text-white font-bold tracking-tight"
            />
          </div>

          <div className="flex flex-col w-full">
            <p className="mb-[2.38rem] text-[0.75rem] md:text-[1.25rem] font-normal">
              TonderLabs is a company dedicated to solving real world problems
              by building utility softwares and applications that help bridge
              the gap between Web2 and Web3, all of which are built on TON
              network.
            </p>

            <button
              className={`bg-white shadow-lg rounded-full md:py-3 md:px-5 py-[0.4rem] pl-[0.79rem] pr-[.53rem] flex justify-center 
              items-center gap-2 w-fit transition-all z-10 `}
            >
              <div
                className="font-semibold bg-gradient-to-tr from-blue-400 to-indigo-600 bg-clip-text 
              text-transparent md:text-[1.5625rem] text-[0.82444rem]"
              >
                Contact Us
              </div>

              <img src={imageGroup.src} alt="button-image max-md:w-[3.2rem]" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default WeBuildSolutionsForWeb3;
