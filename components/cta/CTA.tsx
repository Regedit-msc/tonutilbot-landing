/* eslint-disable @next/next/no-img-element */

import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const CTA = () => {
  return (
    <div className="text-[#ffffff51] border-t border-t-[#ffffff51] flex gap-5 items-center justify-center py-4 mx-8">
      <p className="text-xs sm:text-sm">
        TonBot technologies. 2024 . All rights reserved
      </p>
      <FaTelegramPlane className="text-base" />
      <FaXTwitter />
      <FaDiscord />
    </div>
  );
};
