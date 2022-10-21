import { useEffect, useRef } from "react";

export const useClickClose = (callback: any) => {
  const ref = useRef();
  useEffect(() => {
    function handleOutClick(e: Event) {
      const target = e.target as HTMLDivElement;
      if (!ref?.current?.contains(target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return ref;
};
