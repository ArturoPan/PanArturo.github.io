"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
      }}
    />
  );
}
