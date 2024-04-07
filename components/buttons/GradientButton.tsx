/* eslint-disable @next/next/no-img-element */

interface GradientButtonProps {
  icon?: JSX.Element;
  text?: string;
  className?: string;
}

export function GradientButton({
  icon = <></>,
  text = "",
  className = "",
}: GradientButtonProps): JSX.Element {
  return (
    <button
      className={`bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 shadow-lg rounded-full p-4 flex justify-center items-center text-white gap-3 hover:shadow-blue-400 w-fit transition-all z-10 ${className}`}
    >
      {icon}
      {text}
    </button>
  );
}
