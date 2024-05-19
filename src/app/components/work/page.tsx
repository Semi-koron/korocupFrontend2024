"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { fabric } from "fabric";
import { NextPage } from "next";

interface WorkProps {
  image: string;
  id: number;
}

interface ImageData {
  width: number;
  height: number;
  image: any;
}

const Work: NextPage<WorkProps> = ({ image, id }: WorkProps) => {
  const [data, setData] = useState<ImageData | null>(null);
  const [ID, setID] = useState<string>(`${id}`);

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
      const canvasElement = document.getElementById(ID) as HTMLCanvasElement;
      const canvas = new fabric.Canvas(canvasElement, {
        width: data.width,
        height: data.height,
      });
      canvas.loadFromJSON(data.image, () => {
        canvas.renderAll();
      });
    }
  }, [data, ID]);

  return (
    <div>
      <canvas id={ID}></canvas>
    </div>
  );
};

export default Work;
