
import { GradientText } from "@components/special_text/GradientText";
import Transition from "@components/transitions";
import React, { FC } from "react";
import leftArrow from "@assets/landing-page/leftArrowInactive.png";
import rightArrow from "@assets/landing-page/rightArrowActive.png";

interface IProps {}

const FeaturedProducts: FC<IProps> = () => {
  return (
    <Transition>
      <div className="relative text-white px-3 sm:px-0 pt-20 sm:pt-8 lg:pt-20">
        <div className="flex flex-col justify-center items-center text-center gap-6 relative">
          {/* <img src={mesh.src} alt="Mesh Image" className="absolute w-1/2" /> */}

          <div
            className={`${
              "inView" ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
          >
            <button
              className={`border border-[#333] bg-gradient-to-b from-[#282828] to-[#444] sm:translate-y-3 text-sm shadow-lg rounded-full py-[0.375rem] px-3 flex justify-center 
              items-center text-white gap-3 w-fit transition-all z-10 tracking-[0.3em] sm:tracking-[0.3em]  font-extralight`}
            >
              OUR WORK
            </button>
          </div>

          <GradientText
            text={<>Featured Projects</>}
            className="insetShadow lg:text-8xl text-[2.6rem] sm:text-5xl md:text-6xl font-semibold sm:px-3 tracking-tighter leading-[0.9]"
          />

          <p className="text-white font-normal text-[0.8rem] sm:text-sm lg:text-lg leading-[1.7]">
            We’ve embarked on a few projects to build products{" "}
            <br className="" /> that help us fulfil our mission at TONDr labs
          </p>
        </div>

        <div className="flex justify-end  gap-3">
          <img
            src={leftArrow.src}
            alt="Left Arrow"
            className="cursor-pointer w-[54px] h-[54px]"
          />
          <img
            src={rightArrow.src}
            alt="Right Arrow"
            className="cursor-pointer w-[54px] h-[54px]"
          />
        </div>
      </div>
    </Transition>
  );
};

export default FeaturedProducts;
