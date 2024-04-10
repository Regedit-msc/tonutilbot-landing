/* eslint-disable @next/next/no-img-element */

import { GradientButton } from "@components/buttons/GradientButton";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "@assets/ton_logo.png";

export const Navbar = () => {
  return (
    <nav className=" p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo.src} alt="Logo" className="mr-2" />
        <span className="text-white font-semibold text-lg">
          Ton <span className="font-bold">Bot</span>
        </span>
      </div>

      <GradientButton
        icon={<FaTelegramPlane className="text-[1.5rem] " />}
        text="Open In Telegram"
        className="max-sm:hidden"
      />
    </nav>
  );
};
