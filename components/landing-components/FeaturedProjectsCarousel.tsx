"use client";
import React, { FC } from "react";
import tonderBot from "@assets/landing-page/FeaturedProjects/tonderBot.svg";
import tonBot from "@assets/landing-page/FeaturedProjects/tonBot.svg";
import tonApp from "@assets/landing-page/FeaturedProjects/tonApp.svg";
import Laptop from "@assets/landing-page/FeaturedProjects/laptop.png";
import Link from "next/link";

interface CarouselProps {
  next: boolean;
}

const FeaturedProjectsCarousel: FC<CarouselProps> = ({
  next,
}: CarouselProps) => {
  return (
    <section
      className={`flex justify-start gap-3 sm:gap-5 lg:gap-8 pl-[12%] sm:pl-[20%] lg:pl-[5%] transition-all duration-300 ease-in-out w-screen ${
        next &&
        "-translate-x-[220px] sm:-translate-x-[330px] lg:-translate-x-[600px]"
      }`}
    >
      <div className="min-w-[280px] sm:min-w-[420px] lg:min-w-[900px] h-[220px] sm:h-[330px] lg:h-[600px] bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] rounded-2xl lg:rounded-[3rem] flex flex-col justify-end items-center gap-6 sm:gap-12 overflow-hidden">
        <Link href="/bot">
          <img
            src={tonBot.src}
            alt="tonBot"
            className="lg:hidden w-[130px] sm:w-[195px] lg:w-[260px]"
          />

          <img
            src={tonderBot.src}
            alt="tonderBot"
            className="hidden lg:flex w-[130px] sm:w-[195px] lg:w-[500px]"
          />
          <img
            src={Laptop.src}
            alt="screen"
            className="h-[120px] sm:h-[180px] lg:h-[400px] translate-x-6 sm:translate-x-9 lg:translate-x-[5rem]"
          />
        </Link>
      </div>

      <div className="h-[220px] sm:h-[330px] lg:h-[600px] aspect-square bg-white/[0.05] flex justify-center items-center rounded-2xl lg:rounded-[3rem]">
        <img
          src={tonApp.src}
          alt="tonApp"
          className="w-[130px] sm:w-[195px] lg:w-[400px]"
        />
      </div>
    </section>
  );
};

export default FeaturedProjectsCarousel;
