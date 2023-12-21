import { useState } from "react";
import { useIsomorphicEffect } from "./useIsomorphicEffect";
import type { DeepNullable } from "@/types/utils";

type WindowDimensions = DeepNullable<
  Pick<Window, "innerHeight" | "innerWidth" | "outerHeight" | "outerWidth">
>;

const nullDimensions: WindowDimensions = {
  innerHeight: null,
  innerWidth: null,
  outerHeight: null,
  outerWidth: null,
};

function getDimensions(): WindowDimensions {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

export function useWindowSize(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<WindowDimensions>(() => {
    if (typeof window === "undefined") {
      return nullDimensions;
    } else {
      return getDimensions();
    }
  });

  function onResize() {
    setWindowSize(getDimensions());
  }

  useIsomorphicEffect(() => {
    if (typeof window === "undefined") {
      return () => {};
    } else {
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);

  return windowSize;
}
