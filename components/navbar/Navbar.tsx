/* eslint-disable @next/next/no-img-element */
import { GradientButton } from "@components/buttons/GradientButton";
import logo from "@assets/ton_logo.png";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center relative ">
      <nav
        className={`top-0 flex justify-between items-center fixed md:static w-full p-4 sm:py-10 sm:px-16 lg:max-w-[70rem] bg-ashy/50 z-[999] shadow-2xl backdrop-blur-lg`}
      >
        <div className="flex items-center px-8 py-8 sm:p-0">
          <img src={logo.src} alt="Logo" className="mr-2" />
          <span className="text-white font-normal text-2xl sm:text-lg translate-y-1">
            Ton{" "}
            <span className="font-bold -translate-x-[2px] absolute">Bot</span>
          </span>
        </div>

        <section className="sm:flex text-white gap-8 justify-center items-center hidden text-xs md:text-sm">
          <p className="flex text-white justify-center items-center gap-2">
            Products <IoIosArrowDown />
          </p>
          <p>About</p>
          <GradientButton
            text="Contact us"
            className="text-xs max-sm:hidden"
            isIcon={false}
          />
        </section>
      </nav>
    </div>
  );
};
