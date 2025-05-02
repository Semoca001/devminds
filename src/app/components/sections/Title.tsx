// src/app/components/Title.tsx
"use client";
import { TitleAnimation } from "@/app/effects/TitleAnimation";

const Title = () => (
  <TitleAnimation 
    text="DevMinds" 
    speed={150}
  />
);

export default Title;