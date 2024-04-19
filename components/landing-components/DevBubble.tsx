"use client"
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
    <div className="flex flex-col gap-1 lg:gap-2 justify-center items-center">
      <img
        src={img.src}
        alt="dev"
        className="w-[80px] md:w-[100px] lg:[120px] rounded-full"
      />

      <span className="text-white font-semibold text-[20px] md:text-[24px]">
        {name}
      </span>
      <span className="text-white font-light text-[12px] md:text-[16px]">
        {title}
      </span>
    </div>
  );
};

export default DevBubble;
