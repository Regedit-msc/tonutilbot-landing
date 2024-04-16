/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientButton } from "@components/buttons/GradientButton";
import logo from "@assets/logo-new.png";
import menu from "@assets/menu.png";
import tonderLabs from "@assets/TonderLabs.png";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";

export const Navbar = () => {
  useEffect(() => {
    var scrollY = window.scrollY;
    var newScroll;

    window.addEventListener("scroll", function () {
      newScroll = window.scrollY;
      if (scrollY > newScroll) {
        document.querySelector("nav")?.classList.remove("-translate-y-[100px]");
      } else {
        document.querySelector("nav")?.classList.add("-translate-y-[100px]");
      }
      scrollY = newScroll;
    });

    return () => {
      window.removeEventListener("scroll", newScroll!);
    };
  }, []);
  return (
    <div className="nv w-full flex justify-center items-center relative">
      <nav
        className={`top-0 flex justify-between items-center fixed md:static w-full py-3 md:py-7 sm:px-10 lg:px-20 lg:max-w-[70rem] z-[999] backdrop-blur-xl sm:backdrop:blur-none transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center pl-6 sm:pl-0 sm:py-8 py-4">
          <img src={logo.src} alt="Logo" className="mr-2 h-10" />
          <img src={tonderLabs.src} alt="" className="h-5" />
        </div>

        <img src={menu.src} className="w-8 sm:hidden mr-6" alt="" />

        <section className="sm:flex text-white gap-8 justify-center items-center hidden text-xs sm:text-sm lg:text-base">
          <p className="flex text-white justify-center items-center gap-2">
            Products <IoIosArrowDown />
          </p>
          <p>About</p>
          <GradientButton
            text="Contact us"
            className="text-xs sm:text-sm lg:text-base max-sm:hidden"
            isIcon={false}
          />
        </section>
      </nav>
    </div>
  );
};
