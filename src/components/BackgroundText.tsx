"use client";
import React, { useEffect, useRef } from "react";
import { BACKGROUND_TEXT } from "@/utils/constant";

const BackgroundText: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;

    // Scale the context to ensure correct resolution
    ctx.scale(dpr, dpr);

    const text = BACKGROUND_TEXT;
    const fontSize = 100; // Increased font size
    const fontFamily = "Roboto Mono, monospace"; // Updated font family
    const color = "rgba(0, 0, 0, 0.5)";
    const yPosition = canvas.height / (10 * dpr); // Position text at the top

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;

    // Use textBaseline and textAlign for precise positioning
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    // Draw text at the center of the canvas
    ctx.fillText(text, canvas.width / (2 * dpr), yPosition);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 bg-emerald-200 z-[-1] w-full h-full"
    />
  );
};

export default BackgroundText;
