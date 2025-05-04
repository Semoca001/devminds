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

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`w-full mx-auto px-6 lg:px-12 pt-20 lg:pt-32 ${className}`}>
      <motion.h1
        className="text-left font-extrabold break-all mb-8 lg:mb-12"
        style={{
          fontSize: "clamp(2.5rem, 11vw, 9rem)", // Aumenté ligeramente el vw para más énfasis
          lineHeight: "1.1",
          fontFamily: "--font-roboto",
          wordBreak: "break-word",
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
