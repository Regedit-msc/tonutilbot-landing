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
    <div className="text-white ">
      <div className="flex flex-col justify-center items-center text-center  my-28 max-md:my-52 relative">
        <GradientText
          text={
            <span className="bg-inherit from-inherit via-inherit to-inherit ">
              Third Party <br className="md:hidden" /> Web2{" "}
              <br className="max-md:hidden" /> payments
            </span>
          }
          className="text-center lg:text-[80px] text-6xl text-[40px]"
        />

        <p
          className="text-white sm:text-2xl font-medium 
          lg:leading-[33px] text-base w-4/5 
          mt-[1.56rem] mb-[2.88rem]
          md:mt-[5.46rem] md:mb-[5.46rem] 
          lg:mt-[3.31rem] lg:mb-4"
        >
          Web 2 transactions such as making payments and purchasing airtime or
          data subscriptions can be made using TON token on TonBot.
        </p>

        <div
          className="flex flex-col h-[7.07rem] md:h-[14.58rem] 
          lg:h-[20.69rem] gap-[1.28rem] md:gap-[2.64rem] lg:gap-[3.75rem] 
          items-center justify-center "
        >
          <motion.div
            className=" flex lg:gap-[4.38rem] md:gap-[3.08rem] gap-[1.49rem] "
            style={{ x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...images, ...images].map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt="IntegrationsImage Image"
                className="h-[0.94956rem] md:h-[1.95794rem] lg:h-[2.78144rem]"
              />
            ))}
          </motion.div>
          <motion.div
            className=" flex lg:gap-[4.38rem] md:gap-[3.08rem] gap-[1.49rem] "
            style={{ x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...images, ...images].map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt="IntegrationsImage Image"
                className="h-[0.94956rem] md:h-[1.95794rem] lg:h-[2.78144rem]"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
