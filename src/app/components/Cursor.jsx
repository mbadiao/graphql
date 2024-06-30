"use client";
import { useRef, useEffect } from "react";

const Cursor = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);
  const moveCursor = (e) => {
    cursorDot.current.style.top = e.clientY + "px";
    cursorDot.current.style.left = e.clientX + "px";
    cursorOutline.current.animate(
      {
        top: e.clientY + "px",
        left: e.clientX + "px",
      },
      { duration: 500, fill: "forwards" }
    );
  };
  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div>
      <div
        className="cursor-dot w-[10px] h-[10px] bg-[#5e37ff]"
        ref={cursorDot}
      ></div>
      <div
        className="cursor-outline w-[30px] h-[30px] border-2 border-solid border-[#5e37ff]"
        ref={cursorOutline}
      ></div>
    </div>
  );
};

export default Cursor;
