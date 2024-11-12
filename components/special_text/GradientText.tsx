/* eslint-disable @next/next/no-img-element */

interface GradientTextProps {
  children?: any;
  text?: string | React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  children,
  className = "",
}) => {
  return (
    <h1
      className={`${className} sm:leading-[3.25rem] md:text-6xl relative text-[2.6rem] tracking-tighter 
      sm:text-5xl lg:text-[4rem] lg:w-full text-center mb-2 sm:mb-6 font-bold flex justify-center items-center 
      bg-gradient-to-tr from-white to-gray-600 via-white via-[40%] bg-clip-text text-transparent leading-none 
      p-[0.3em]`}
    >
      {children} {text}
    </h1>
  );
};
