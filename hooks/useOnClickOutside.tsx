import { useEffect, RefObject } from "react";

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  handleHover?: boolean
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as T)) {
        return;
      }
      handler(event);
    };
    if (handleHover) {
      document.addEventListener("mouseover", listener);
      document.addEventListener("touchmove", listener);
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      if (handleHover) {
        document.removeEventListener("mouseover", listener);
        document.removeEventListener("touchmove", listener);
      }
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, handleHover]);
}
