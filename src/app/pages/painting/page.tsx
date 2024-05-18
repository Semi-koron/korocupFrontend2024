"use client";
import { useLayoutEffect, useState } from "react";
import { fabric } from "fabric";
import { Canvas, BaseBrush } from "fabric/fabric-impl";

const backgroundImageUrl: string = "";
const CanvasId: string = "test";
const initialBrushColor = "blue";
const initialBrushWidth = 25;

export default function Home() {
  const [fabricCanvas, setFabricCanvas] = useState<Canvas>();
  const [brushColor, setBrushColor] = useState<string>(initialBrushColor);

  useLayoutEffect(() => {
    const canvas = new fabric.Canvas(CanvasId, {
      isDrawingMode: true,
      width: 500,
      height: 500,
      backgroundImage: backgroundImageUrl,
    });
    setFabricCanvas(canvas);
  }, [brushColor]);
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <h1>Semikoron Page</h1>
      <input type="color" onChange={handlechange} />
      <canvas id={CanvasId} width="500" height="500"></canvas>
    </>
  );
}
