"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullText = "DevMinds";

const Title = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150); // velocidad de escritura
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Parpadeo del cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // cada 0.5s
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative">
      <motion.h1
        className="text-left font-extrabold break-words mb-10 sm:mb-12 lg:mb-16"
        style={{
          fontSize: "clamp(2.5rem, 12vw, 8rem)",
          lineHeight: "1.2",
          fontFamily: "--font-roboto",
        }}
        initial={{ opacity: 1 }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 500,
              damping: 10
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

export default Title;