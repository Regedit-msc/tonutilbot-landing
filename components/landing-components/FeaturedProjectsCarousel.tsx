"use client";
import React, { FC } from "react";
import Image from "next/image";
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
      className={`flex justify-start min-[1640px]:justify-center gap-3 sm:gap-5 lg:gap-8 pl-[12%] sm:pl-[20%] lg:pl-[5%]  min-[1640px]:pl-0 transition-all duration-300 ease-in-out w-screen ${
        next &&
        "-translate-x-[220px] sm:-translate-x-[330px] lg:-translate-x-[600px] min-[1640px]:translate-x-0"
      }`}
    >
      <Link href="/bot">
        <div className="min-w-[280px] sm:min-w-[420px] lg:min-w-[900px] h-[220px] sm:h-[330px] lg:h-[600px] bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] rounded-2xl lg:rounded-[3rem] flex flex-col justify-end items-center gap-6 sm:gap-12 overflow-hidden">
          <Image
            src={tonBot}
            alt="TonderBot logo mobile view"
            className="lg:hidden w-[130px] sm:w-[195px] lg:w-[260px]"
          />

          <Image
            src={tonBot}
            alt="TonderBot logo desktop view"
            className="hidden lg:flex w-[130px] sm:w-[195px] lg:w-[500px]"
          />
          <Image
            src={Laptop}
            alt="TonderBot interface mockup on laptop screen"
            className="h-[120px] sm:h-[180px] lg:h-[400px] translate-x-6 sm:translate-x-9 lg:translate-x-[5rem]"
          />
        </div>
      </Link>

      <div className="h-[220px] sm:h-[330px] lg:h-[600px] aspect-square bg-white/[0.05] flex justify-center items-center rounded-2xl lg:rounded-[3rem]">
        <Image
          src={tonApp}
          alt="TonderApp logo and interface preview"
          className="w-[130px] sm:w-[195px] lg:w-[400px]"
        />
      </div>
    </section>
  );
};

export default FeaturedProjectsCarousel;
