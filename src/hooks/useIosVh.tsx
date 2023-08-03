import { useEffect } from "react";

/**
 * mobile ios에서
 */
export default function useIosVh() {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight / 100;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh(); // Initialize the --vh variable

    if (typeof window !== "undefined") {
      window.addEventListener("resize", setVh);
    }

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);
}
