"use client";
import React, { FC } from "react";
import BuySellAndSwap from "./BuySellAndSwap";
import AccessToServices from "./AccessToServices";
import ReferralsAndAirdrop from "./ReferralsAndAirdrop";

const ParallaxSections: FC = () => {
  return (
    <div className="relative min-h-[300vh]">
      <div className="sticky top-0 min-h-screen z-10">
        <BuySellAndSwap />
      </div>

      <div className="sticky top-0 min-h-screen z-20">
        <AccessToServices />
      </div>

      <div className="sticky top-0 min-h-screen z-30">
        <ReferralsAndAirdrop />
      </div>
    </div>
  );
};

export default ParallaxSections;
