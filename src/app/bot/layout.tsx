import React, { FC, ReactNode } from "react";
import prismlight from "@/assets/herolight.svg";

interface IProps {
  children?: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <img
        src={prismlight.src}
        alt="prism light image"
        className="absolute sm:h-fit w-full h-[40rem] top-0 opacity-85 sm:w-[70vw] sm:top-20 md:top-0 sm:left-[15vw] lg:w-[50vw] lg:left-[25vw]"
      />
      {children}
    </div>
  );
};

export default Layout;
