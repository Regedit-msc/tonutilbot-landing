"use client";
import React, { FC } from "react";
import BuySellAndSwap from "./BuySellAndSwap";
import AccessToServices from "./AccessToServices";
import ReferralsAndAirdrop from "./ReferralsAndAirdrop";

// interface IProps {};

const ParallaxSections: FC = (props) => {
   return (
     <div>
       <BuySellAndSwap />

       <AccessToServices />

       <ReferralsAndAirdrop />
     </div>
   );
};

export default ParallaxSections;
