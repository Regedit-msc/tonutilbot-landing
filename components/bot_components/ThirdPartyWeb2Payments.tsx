/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import Card from "@assets/Card.svg";
import Image from "next/image";
import ImageAutoCarousel from "@components/ImageAutoCarousel";

export const ThirdPartyWeb2Payments = () => {
  return (
    <div className="text-white py-6 w-full relative overflow-hidden h-full flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center text-center relative sm:pb-3">
        <Image src={Card} alt="Payment card icon" className="w-20" />
        <GradientText variant="grid-section">
          Third party Web2 <br /> payments
        </GradientText>
      </div>
      <ImageAutoCarousel />
      <ImageAutoCarousel reverse />
    </div>
  );
};
