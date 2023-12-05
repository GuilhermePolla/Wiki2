"use client";
import "./styles.css";
import { useState, useEffect } from "react";

function BackgroundImage() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [background, setBackground] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground((prev) => {
        if (prev === images.length) {
          return 1;
        }
        return prev + 1;
      });
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <img
      alt="Document image"
      src={`/${background}.jpg`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}

export default BackgroundImage;
