import Image from "next/image";
import React from "react";
import shopify from "@assets/integrationSlideImages/Shopify.png";
import PayPal from "@assets/integrationSlideImages/PayPal.png";
import Stripe from "@assets/integrationSlideImages/Stripe.png";
import amazon from "@assets/integrationSlideImages/amazon.png";
import paystack from "@assets/integrationSlideImages/paystack.png";

interface ImageAutoCarouselProps {
  reverse?: boolean;
}

const ImageAutoCarousel: React.FC<ImageAutoCarouselProps> = ({ reverse }) => {
  const images = [shopify, PayPal, Stripe, amazon, paystack];
  const imageNames = ["Shopify", "PayPal", "Stripe", "Amazon", "Paystack"];

  return (
    <div className="relative h-[3rem] -translate-y-2- w-full">
      <div className="absolute w-full h-full bg-gradient-to-r from-[#202125] from-[5%] via-[20%] via-transparent z-10 flex"></div>
      <div className="absolute w-full h-full bg-gradient-to-l from-[#202125] from-[5%] via-[20%] via-transparent z-10 flex"></div>

      <div className="absolute flex">
        {[...Array(3)].map((_, index) => (
          <section
            key={index}
            className={`flex ${
              reverse ? "animate-swipe-reverse" : "animate-swipe"
            }`}
          >
            {images.map((image, id) => (
              <div key={id}>
                <Image
                  src={image}
                  alt={`${imageNames[id]} integration logo`}
                  className="h-[3rem] max-w-[120px] object-contain px-3"
                />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ImageAutoCarousel;
