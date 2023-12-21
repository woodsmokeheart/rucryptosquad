import { useState, useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

interface ResizeResult {
  width: number;
  isScreenSm: boolean;
  isScreenMd: boolean;
  isScreenLg: boolean;
  isScreenXl: boolean;
  isScreenXxl: boolean;
}

export const SCREEN_SM: number = 576;
export const SCREEN_MD: number = 768;
export const SCREEN_LG: number = 992;
export const SCREEN_XL: number = 1200;
export const SCREEN_XXL: number = 1400;

const useResize = (): ResizeResult => {
  const { innerWidth } = useWindowSize();
  const [width, setWidth] = useState<number | null>(innerWidth);

  useEffect(() => {
    const handleResize = (e: Event) => {
      const target = e.target as Window;
      setWidth(target.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const actualWidth = width !== null ? width : 0;

  return {
    width: actualWidth,
    isScreenSm: actualWidth >= SCREEN_SM,
    isScreenMd: actualWidth >= SCREEN_MD,
    isScreenLg: actualWidth >= SCREEN_LG,
    isScreenXl: actualWidth >= SCREEN_XL,
    isScreenXxl: actualWidth >= SCREEN_XXL,
  };
};

export default useResize;
