"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxScrollWrapperProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
};

const ParallaxScrollWrapper: React.FC<ParallaxScrollWrapperProps> = ({
  children,
  className,
  y,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        yPercent: y ?? -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top", // ends when the bottom of the section hits the top of the viewport
          scrub: true, // smooth scroll effect
        },
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxScrollWrapper;
