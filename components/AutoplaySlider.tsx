"use client";
import React, { FC, useEffect } from "react";
import shopify from "@assets/integrationSlideImages/Shopify.png";
import PayPal from "@assets/integrationSlideImages/PayPal.png";
import Stripe from "@assets/integrationSlideImages/Stripe.png";
import amazon from "@assets/integrationSlideImages/amazon.png";
import paystack from "@assets/integrationSlideImages/paystack.png";
import useWindowWidth from "@hooks/useWindowWidth";

interface IProps {}

const AutoplaySlider: FC<IProps> = () => {
  const images = [shopify, PayPal, Stripe, amazon, paystack];
  const width = useWindowWidth() || 0;

  return (
    <div className="flex justify-center flex-col items-center mt-12 lg:mt-14 sm:mt-16 overflow-hidden">
      <div className="relative flex my-4 mx-10 w-[500px] sm:w-[800px] lg:w-[1200px] overflow-hidden">
        <span className="absolute bg-gradient-to-r from-ashy via-ashy lg:via-[30%] via-[60%] to-transparent -left-1 w-28 sm:w-36 md:w-28 h-full z-10" />
        <span className="absolute bg-gradient-to-l from-ashy via-ashy via-[60%] to-transparent -right-1 w-28 sm:w-32 md:w-28 h-full z-10" />
        <div
          className={`flex ${width <= 640 && "logos-slide"} ${
            width > 640 && "logos-slide-sm"
          }`}
        >
          {images.map((_, i) => (
            <img
              key={i}
              src={images[i].src}
              alt=""
              className="h-6 sm:h-10 lg:mr-[4.485rem]"
            />
          ))}
          {images.map((_, i) => (
            <img
              key={i}
              src={images[i].src}
              alt=""
              className="h-6 sm:h-10 lg:mr-[4.485rem]"
            />
          ))}
        </div>
      </div>

      {/* slide two */}
      <div className="relative flex my-4 mx-10 w-[500px] sm:w-[800px] lg:w-[1200px] overflow-x-hidden h-fit">
        <span className="absolute bg-gradient-to-r from-ashy via-ashy lg:via-[30%] via-[60%] to-transparent -left-1 w-28 sm:w-36 md:w-28 h-full z-10" />
        <span className="absolute bg-gradient-to-l from-ashy via-ashy via-[60%] to-transparent -right-1 w-28 sm:w-32 md:w-28 h-full z-10" />
        <div
          className={`flex ${width <= 640 && "logos-slide2"} ${
            width > 640 && "logos-slide2-sm"
          }`}
        >
          {images.map((_, i) => (
            <img
              key={i}
              src={images[i].src}
              alt=""
              className="h-6 sm:h-10 lg:mr-[4.485rem]"
            />
          ))}
          {images.map((_, i) => (
            <img
              key={i}
              src={images[i].src}
              alt=""
              className="h-6 sm:h-10 lg:mr-[4.485rem]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoplaySlider;
