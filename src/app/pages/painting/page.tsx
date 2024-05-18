"use client";
import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import Style from "./page.module.css";

const CanvasId: string = "canvas";

export default function Home() {
  const [brushColor, setBrushColor] = useState<string>("blue");
  const [brushWidth, setBrushWidth] = useState<number>(10);
  const canvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvasElement = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement;
    const canvas = new fabric.Canvas(canvasElement, {
      isDrawingMode: true,
      backgroundColor: "white",
      width: 800,
      height: 600,
    });
    canvas.freeDrawingBrush.width = 10;
    canvasRef.current = canvas;
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.freeDrawingBrush.color = brushColor;
      canvasRef.current.freeDrawingBrush.width = brushWidth;
      canvasRef.current.renderAll();
    }
  }, [brushColor]);

  const handleColorChange = (e: any) => {
    setBrushColor(e.target.value);
  };

  const toJson = () => {
    if (canvasRef.current) {
      const json = canvasRef.current.toJSON();
      console.log(json);
    }
  };

  return (
    <>
      <h1>お絵描きページ</h1>
      <input type="color" onChange={handleColorChange} value={brushColor} />
      <canvas id={CanvasId} className={Style.canvas}></canvas>
      <button onClick={toJson}>toJson</button>
    </>
  );
}
