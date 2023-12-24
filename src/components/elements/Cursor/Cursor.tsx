"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text") as HTMLElement;

    const onMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      gsap.set(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      const link = event.currentTarget;
      if (link.classList.contains("view")) {
        gsap.set(cursor, { scale: 4 });
        (cursorText as HTMLElement)?.style?.setProperty("display", "block");
      } else {
        gsap.set(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      gsap.set(cursor, { scale: 1 });
      (cursorText as HTMLElement)?.style?.setProperty("display", "none");
    };

    document.addEventListener("mousemove", (event) =>
      onMouseMove(event as MouseEvent)
    );

    links.forEach((link) => {
      link.addEventListener("mouseenter", (event) =>
        onMouseEnterLink(
          event as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        )
      );
      link.addEventListener("mouseleave", (event) =>
        onMouseLeaveLink(
          event as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        )
      );
    });
  }, []);
  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">View</span>
    </div>
  );
};

export default Cursor;
