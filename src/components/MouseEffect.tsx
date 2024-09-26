"use client";

import { useState, useEffect } from "react";

export default function DynamicBackground() {
  const [backgroundPosition, setBackgroundPosition] = useState("0px 0px");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setBackgroundPosition(`${x}px ${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-30 pointer-events-none transition duration-300"
      style={{
        background: `radial-gradient(600px at ${backgroundPosition}, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    />
  );
}