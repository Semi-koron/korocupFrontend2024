"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { fabric } from "fabric";

interface WorkProps {
  image: string;
  id: string;
}

interface ImageData {
  width: number;
  height: number;
  image: any;
}

const Work: React.FC<WorkProps> = ({ image, id }: WorkProps) => {
  const [data, setData] = useState<ImageData | null>(null);

  useLayoutEffect(() => {
    try {
      const imageData: ImageData = JSON.parse(image);
      setData(imageData);
    } catch (error) {
      console.error("Invalid image data:", error);
    }
  }, [image]);

  useEffect(() => {
    if (data) {
      const canvasElement = document.getElementById(id) as HTMLCanvasElement;
      const canvas = new fabric.Canvas(canvasElement, {
        width: data.width,
        height: data.height,
      });
      canvas.loadFromJSON(data.image, () => {
        canvas.renderAll();
      });
    }
  }, [data, id]);

  return (
    <div>
      <canvas id={id}></canvas>
    </div>
  );
};

export default Work;
