"use client";
import React, { FC } from "react";
import BuySellAndSwap from "./BuySellAndSwap";
import AccessToServices from "./AccessToServices";
import ReferralsAndAirdrop from "./ReferralsAndAirdrop";

const ParallaxSections: FC = () => {
  return (
    <div className="relative">
      <div className="sticky -top-12 lg:top-0 z-10">
        <BuySellAndSwap />
      </div>

      <div className="sticky -top-12 lg:top-0 z-20">
        <AccessToServices />
      </div>

      <div className="sticky -top-12 lg:top-0 z-30">
        <ReferralsAndAirdrop />
      </div>
    </div>
  );
};

export default ParallaxSections;
