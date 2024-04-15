"use client";
import { useState, useEffect } from "react";
export default function useWindowWidth() {
  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
     }
     
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
