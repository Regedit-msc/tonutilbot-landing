"use client";
import { StaticImageData } from "next/image";
import React, { FC, useState } from "react";
import ShareIcon from "@assets/landing-page/OurTeam/ShareIcon.svg";

interface DevProps {
  name: string;
  title: string;
  img: StaticImageData;
}

const DevBubble: FC<DevProps> = ({ name, title, img }: DevProps) => {
  const [activeDev, setActiveDev] = useState(0);
  return (
    <div className="relative flex flex-col gap-1 lg:gap-2 justify-center items-center rounded-full">
      <img
        src={img.src}
        alt="dev"
        className="w-[80px] md:w-[100px] lg:[120px] rounded-full"
      />

      <span className="text-white font-semibold text-[20px] md:text-[24px] z-30">
        {name}
      </span>
      <span className="text-white font-light text-[12px] md:text-[16px]">
        {title}
      </span>
      <div
        className={`hover:opacity-100 opacity-0 transition-all
         duration-300 ease-in-out flex absolute w-[80px] md:w-[100px] lg:[120px] aspect-square rounded-full bg-purple-600/10 z-20 top-0 justify-center items-center backdrop-blur-[3px]`}
      >
        <img src={ShareIcon.src} alt="" className="w-[20px] lg:w-[26px]" />
      </div>
    </div>
  );
};

export default DevBubble;
