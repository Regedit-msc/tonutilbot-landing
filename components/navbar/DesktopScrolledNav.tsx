/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientButton } from "@components/buttons/GradientButton";
import logo from "@assets/logo-new.png";
import tonderLabs from "@assets/TonderLabs.png";
import down from "@assets/Navbar/arrowdown.svg";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ProductsDropdown from "@components/ProductsDropdown";
import MobileNav from "./MobileNav";

export const DesktopScrolledNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    var scrollY = window.scrollY;
    var newScroll;

    window.addEventListener("scroll", function () {
      newScroll = window.scrollY;
      if (newScroll < 150) {
        document.querySelector("nav")?.classList.add("opacity-0");
      } else {
        if (scrollY > newScroll) {
          document
            .querySelector("nav")
            ?.classList.remove("-translate-y-[200px]");
          document.querySelector("nav")?.classList.remove("opacity-0");
        } else {
          document.querySelector("nav")?.classList.add("-translate-y-[200px]");
        }
      }
      scrollY = newScroll;
    });

    return () => {
      window.removeEventListener("scroll", newScroll!);
    };
  }, []);

  return (
    <div className="w-full sm:flex justify-center items-center relative hidden max-w-screen">
      <nav
        className={`top-0 flex flex-col sm:flex-row justify-between items-center fixed w-full sm:w-[90%] py-3 sm:py-0 sm:my-10 sm:rounded-full px-6 lg:max-w-[70rem] z-[999] backdrop-blur-[60px] sm:backdrop:blur-none transition-all duration-500 ease-in-out bg-white/10 opacity-0 shadow-lg shadow-black/10`}
      >
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <div className="flex items-center pl-6 sm:pl-0 py-4">
              <img src={logo.src} alt="Logo" className="mr-2 h-10" />
              <img src={tonderLabs.src} alt="TonderLabs logo" className="h-5" />
            </div>
          </Link>
        </div>

        <MobileNav open={menuOpen} setOpen={setMenuOpen} />

        <section className="sm:flex text-white gap-8 sm:gap-4 md:gap-8 justify-center items-center hidden text-xs sm:text-sm lg:text-base">
          <div className="relative">
            <p
              onClick={() => {
                setProductsOpen(!productsOpen);
              }}
              className="cursor-pointer flex text-white justify-center items-center gap-2"
            >
              Products <img src={down.src} alt="open" className="w-2" />
            </p>
            <ProductsDropdown open={productsOpen} setOpen={setProductsOpen} />
          </div>

          <Link href="/blog">
            <p>Blog</p>
          </Link>

          <Link href="https://docs.tonderlabs.com">
            <p>About</p>
          </Link>

          <Link href="https://t.me/tonderbot_news">
            <GradientButton
              myPadding={true}
              className="text-sm py-3 px-6 text-nowrap"
              text="Contact Us"
              isIcon={false}
            />
          </Link>
        </section>
      </nav>
    </div>
  );
};
