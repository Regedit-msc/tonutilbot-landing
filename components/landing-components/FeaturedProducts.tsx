/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import Transition from "@components/transitions";
import React, { FC, useState } from "react";
import useWindowWidth from "@hooks/useWindowWidth";
import TonBot from "@assets/landing-page/OurTeam/ProductImages/Product1.svg";
import TonBot2 from "@assets/landing-page/OurTeam/ProductImages/Product2.svg";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface IProps {}

const slideImages = [
  {
    src: TonBot,
  },
  {
    src: TonBot2,
  },
];

const slideNumber = slideImages.length;

const FeaturedProducts: FC<IProps> = () => {
  const [transform, setTransform] = useState(0);

  const width = useWindowWidth();

  return (
    <>
      <div className="relative text-white px-3 sm:px-0 pt-20 sm:pt-8 lg:pt-20">
        <div className="flex flex-col justify-center items-center text-center relative">
          <button
            className={` bg-[#ffffff0d] text-[.79rem] shadow-lg rounded-full px-[1.19rem] py-[.44rem]
              text-white gap-3  inter font-light
              sm:text-[1.5rem]`}
          >
            OUR WORK
          </button>

          <GradientText
            text={
              <>
                Featured <br className="sm:hidden" /> Projects
              </>
            }
            className="insetShadow lg:text-8xl text-[2.6rem] sm:text-5xl md:text-6xl font-semibold sm:px-3 sm:py-0 
            sm:tracking-[-0.23rem] tracking-[-0.105rem] md:py-[1.38rem] py-[.56rem] z-10 sm:leading-[5.125rem] leading-[2.75rem]"
          />

          <p className="text-white text-[0.75rem]  lg:text-[1.5rem] leading-[1.25rem] lg:leading-[2.0625rem] font-medium inter">
            We’ve embarked on a few projects to build products{" "}
            <br className="" /> that help us fulfil our mission at TONDr labs
          </p>
        </div>
      </div>

      <div className="flex justify-end  gap-3 max-w-[75.1rem] xl:mx-auto   mx-6 mt-4 max-sm:hidden">
        <div
          className={`cursor-pointer w-[54px] h-[54px] rounded-full border  flex justify-center 
        items-center  ${
          transform === 0 ? "bg-[#ffffff0d] border-transparent" : "border-white"
        }`}
          onClick={() => setTransform((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          <IoIosArrowRoundBack className="text-white text-4xl" />
        </div>

        <div
          className={`cursor-pointer w-[54px] h-[54px] rounded-full border flex justify-center items-center ${
            transform === slideNumber - 1
              ? "bg-[#ffffff0d] border-transparent"
              : "border-white"
          }`}
          onClick={() =>
            setTransform((prev) => (prev < slideNumber - 1 ? prev + 1 : prev))
          }
        >
          <IoIosArrowRoundForward className="text-white text-4xl" />
        </div>
      </div>

      <div className="overflow-hidden lg:max-w-[81.1rem]  block w-full text-nowrap mt-[3.25rem] sm:mt-[2.4rem] px-4 sm:px-6 lg:px-8 mx-auto">
        {slideImages.map((_, index) => (
          <div
            key={index}
            className={`lg:w-[55.8125rem] md:w-[36rem] sm:w-[25rem] w-[17.625rem] lg:h-[37.8125rem] md:h-[22rem] sm:h-[17rem] h-[13.5625rem]  rounded-[52px] 
           transition-transform  ease-in-out duration-5000 inline-block mr-8 `}
            style={{
              transform: width
                ? width > 1024
                  ? `translateX(${-55.8125 * transform}rem)`
                  : width > 768
                  ? `translateX(${-36 * transform}rem)`
                  : width > 640
                  ? `translateX(${-25 * transform}rem)`
                  : `translateX(${-17.625 * transform}rem)`
                : "",
            }}
          >
            <img
              src={slideImages[index].src.src}
              alt="slide"
              className="h-full"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center  gap-3 max-w-[75.1rem] xl:mx-auto mx-6 mt-[3.25rem] sm:hidden">
        <div
          className={`cursor-pointer w-[54px] h-[54px] rounded-full border  flex justify-center 
        items-center  ${
          transform === 0 ? "bg-[#ffffff0d] border-transparent" : "border-white"
        }`}
          onClick={() => setTransform((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          <IoIosArrowRoundBack className="text-white text-4xl" />
        </div>

        <div
          className={`cursor-pointer w-[54px] h-[54px] rounded-full border flex justify-center items-center ${
            transform === slideNumber - 1
              ? "bg-[#ffffff0d] border-transparent"
              : "border-white"
          }`}
          onClick={() =>
            setTransform((prev) => (prev < slideNumber - 1 ? prev + 1 : prev))
          }
        >
          <IoIosArrowRoundForward className="text-white text-4xl" />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
