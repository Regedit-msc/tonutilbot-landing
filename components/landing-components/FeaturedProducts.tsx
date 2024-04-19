/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import Transition from "@components/transitions";
import React, { FC, useState } from "react";
import arrowBack from "@assets/FeaturedProjects/arrowBack.svg";
import arrowForward from "@assets/FeaturedProjects/arrowForward.svg";

interface IProps {}

const slideNumber = 2;

const FeaturedProducts: FC<IProps> = () => {
  const [transform, setTransform] = useState(0);

  return (
    <>
      <div className="hidden relative text-white px-3 sm:px-0 pt-20 sm:pt-8 lg:pt-20 bg-blue-300">
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
            We&apos;ve embarked on a few projects to build products{" "}
            <br className="" /> that help us fulfil our mission at TONDr labs
          </p>
        </div>
      </div>

      <div className="flex justify-end  gap-3 max-w-[75.1rem] xl:mx-auto mx-6 mt-4">
        <img
          src={arrowBack.src}
          alt="Left Arrow"
          className="cursor-pointer w-[54px] h-[54px]"
          onClick={() => setTransform((prev) => (prev > 0 ? prev - 1 : 0))}
        />
        <img
          src={arrowForward.src}
          alt="Right Arrow"
          className="cursor-pointer w-[54px] h-[54px]"
          onClick={() =>
            setTransform((prev) => (prev < slideNumber - 1 ? prev + 1 : prev))
          }
        />
      </div>

      <div className="overflow-hidden lg:max-w-[81.1rem]  block w-full text-nowrap mt-[2.4rem] px-4 sm:px-6 lg:px-8 mx-auto">
        {Array(slideNumber)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`lg:w-[55.8125rem] md:w-[36rem] sm:w-[25rem] w-[17.625rem] lg:h-[37.8125rem] md:h-[22rem] sm:h-[17rem] h-[13.5625rem]  bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 rounded-[52px] 
           transition-transform lg:translate-x-[${
             -55.8125 * transform
           }rem] md:translate-x-[-${36 * transform}rem] sm:translate-x-[${
                -25 * transform
              }rem] translate-x-[${
                -17.625 * transform
              }rem]  ease-in-out duration-5000 inline-block mr-8`}
            ></div>
          ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
