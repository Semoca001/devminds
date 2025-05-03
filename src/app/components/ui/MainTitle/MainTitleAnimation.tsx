"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TitleAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TitleAnimation = ({
  text: fullText,
  speed = 150,
  className = "",
}: TitleAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Efecto de escritura
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, speed]);

  // Cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-32 ${className}`}>
      <motion.h1
        className="text-left font-extrabold break-words mb-10 lg:mb-16"
        style={{
          fontSize: "clamp(4rem, 15vw, 9rem)", // más grande en pantallas grandes
          lineHeight: "1.2",
          fontFamily: "--font-roboto",
        }}
        initial={{ opacity: 1 }}
      >
        {displayText.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 500,
              damping: 10,
            }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          _
        </motion.span>
      </motion.h1>
    </div>
  );
};
