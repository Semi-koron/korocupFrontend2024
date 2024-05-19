"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import Box1 from "../box1/box1"; // Fix: Import the default export from './../box1/page'
import { fabric } from "fabric";
import Style from "./page.module.css";

export default function Work({ Image, Id }: { Image: string; Id: string }) {
  const [data, setData] = useState<any>();
  useLayoutEffect(() => {
    const Json: any = JSON.parse(Image);
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
      <div className={Style.work}>
        <canvas id={Id}></canvas>
        <Box1 />
      </div>
    </>
  );
}
