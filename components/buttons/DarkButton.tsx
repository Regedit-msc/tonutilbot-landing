/* eslint-disable @next/next/no-img-element */

interface DarkButtonProps {
  icon?: JSX.Element;
  text?: string;
  className?: string;
}

export function DarkButton({
  icon = <></>,
  text = "",
  className = "",
}: DarkButtonProps): JSX.Element {
  return (
    <button
      className={`bg-gradient-to-b hover:bg-gradient-to-t cursor-pointer from-transparent to-[#ffffff2e] shadow-lg rounded-full p-4 px-6 flex justify-center items-center text-white gap-3 w-fit transition-all border border-[#ffffff2e] z-10 ${className}`}
    >
      {icon}
      {text}
    </button>
  );
}
