/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const CTA = ({
  text = `TonderLabs technologies. ${new Date().getFullYear()} . All rights reserved`,
}) => {
  return (
    <div className="text-[#ffffff51] border-t border-t-[#ffffff51] flex gap-5 items-center justify-center py-4 mx-8">
      <p className="text-xs sm:text-sm">{text}</p>
      <Link href="https://t.me/tonderbot_news">
        <FaTelegramPlane className="text-base" />
      </Link>
      <FaXTwitter />

      <Link href="https://discord.com/invite/YdpyHVAr">
        <FaDiscord />
      </Link>
    </div>
  );
};
