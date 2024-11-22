/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import React, { FC, useState } from "react";
import LandingDarkButton from "@components/buttons/LandingDarkButton";
import FeaturedProjectsCarousel from "@components/landing-components/FeaturedProjectsCarousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface IProps {}

const FeaturedProducts: FC<IProps> = () => {
  const [next, setNext] = useState(false);

  return (
    <section className="py-10 flex flex-col gap-10 justify-center items-center">
      <div className="relative text-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center gap-3 relative">
          <LandingDarkButton text="OUR WORK" isIcon={false} />
          <GradientText
            text={<>Featured Projects</>}
            className="sm:w-full w-2/3 insetShadow lg:text-8xl text-[2.6rem] sm:text-5xl md:text-6xl font-bold sm:px-3 tracking-tighter pb-[6px] pt-0 lg:pb-3 leading-10"
          />

          <p className="text-white font-light text-[12px] sm:text-sm lg:text-lg leading-[1.7] -mt-3">
            We&apos;ve embarked on a few projects to build products{" "}
            <br className="" /> that help us fulfil our mission at TonderLabs.
          </p>
        </div>
      </div>

      <div className="overflow-hidden flex lg:my-10">
        <FeaturedProjectsCarousel next={next} />
      </div>

      <div className="flex justify-center items-center sm:justify-end  gap-3 max-w-[75rem] xl:mx-auto mx-6 mt-4 lg:absolute lg:right-[10%] lg:-translate-y-[230px]">
        <div
          className={`w-[54px] h-[54px] rounded-full flex justify-center items-center  border cursor-pointer ${
            next ? "" : "bg-[#ffffff0e] border-transparent"
          }  `}
          onClick={() => {
            setNext(false);
          }}
        >
          <BsArrowLeft className="text-[1.3rem] text-white" />
        </div>
        <div
          className={` w-[54px] h-[54px] rounded-full flex justify-center items-center border cursor-pointer ${
            next ? "bg-[#ffffff0e] border-transparent" : ""
          } `}
          onClick={() => {
            setNext(true);
          }}
        >
          <BsArrowRight className="text-[1.3rem] text-white" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
