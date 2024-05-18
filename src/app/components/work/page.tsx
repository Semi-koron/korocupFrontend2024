"use client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { fabric } from "fabric";

type Props = {
  Image: string;
  Id: string;
};

type Json = {
  width: number;
  height: number;
  image: string;
};

export const Work: React.FC<Props> = ({ Image, Id }) => {
  const [data, setData] = useState<Json>();
  useLayoutEffect(() => {
    const Json: Json = JSON.parse(Image);
    setData(Json);
  }, []);

  useEffect(() => {
    if (data) {
      const canvasElement = document.getElementById(Id) as HTMLCanvasElement;
      const canvas = new fabric.Canvas(canvasElement, {
        width: data?.width,
        height: data?.height,
      });
      canvas.loadFromJSON(data?.image, () => {
        canvas.renderAll();
      });
    }
  }, [data]);

  return (
    <>
      <div>
        <canvas id={Id}></canvas>
      </div>
    </>
  );
};
