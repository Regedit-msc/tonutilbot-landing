/* eslint-disable @next/next/no-img-element */

import { GradientButton } from "@components/buttons/GradientButton";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "@assets/ton_logo.png";

export const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="flex items-center p-0">
        <img src={logo.src} alt="Logo" className="mr-2" />
        <span className="text-white font-normal text-3xl sm:text-lg translate-y-1">
          Ton <span className="font-bold -translate-x-[2px] absolute">Bot</span>
        </span>
      </div>

      <GradientButton
        icon={<FaTelegramPlane className="text-[1.5rem]" />}
        text="Open In Telegram"
        className="max-sm:hidden"
      />
    </nav>
  );
};
