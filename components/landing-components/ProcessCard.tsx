import React, { FC } from "react";

interface IProps {
  icon: HTMLImageElement;
  title: string;
  desc: string;
}

const ProcessCard: FC<IProps> = ({ icon, title, desc }) => {
  return (
    <div className="rounded-2xl border border-ashyBorder bg-ashy w-[140px] h-[165px] flex flex-col py-4 px-2 justify-center items-center gap-2">
      <span className="flex justify-center items-center">
        <img src={icon.src} alt="" className="w-[42px]" />
      </span>
      <span className="text-base font-semibold">{title}</span>
      <span className="text-[0.5rem] font-extralight text-center">{desc}</span>
    </div>
  );
};

export default ProcessCard;
