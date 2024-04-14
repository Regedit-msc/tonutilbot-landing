/* eslint-disable @next/next/no-img-element */
"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { GradientText } from "@components/special_text/GradientText";
import shopify from "@assets/integrationSlideImages/Shopify.png";
import PayPal from "@assets/integrationSlideImages/PayPal.png";
import Stripe from "@assets/integrationSlideImages/Stripe.png";
import amazon from "@assets/integrationSlideImages/amazon.png";
import paystack from "@assets/integrationSlideImages/paystack.png";
import { useEffect, useState } from "react";

export const ThirdPartyWeb2Payments = () => {
  const images = [shopify, PayPal, Stripe, amazon, paystack];
  const FAST_DURATION = 5;
  const SLOW_DURATION = 28;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <div className="text-white pt-8">
      <div className="flex flex-col justify-center items-center text-center relative">
        <GradientText
          text={
            <span className="bg-inherit from-inherit via-inherit to-inherit text-[2.6rem] tracking-tighter insetShadow">
              Third Party <br className="md:hidden" /> Web2
              <br className="sm:flex hidden" /> payments
            </span>
          }
          className="text-center lg:text-[80px] text-6xl text-[40px]"
        />

        <p
          className="text-white sm:text-2xl text-xs font-normal 
         mt-6 leading-[1.8]"
        >
          Web 2 transactions such as making payments <br /> and purchasing
          airtime or data subscriptions <br /> can be made using TON token on
          TonBot.
        </p>
      </div>
    </div>
  );
};
