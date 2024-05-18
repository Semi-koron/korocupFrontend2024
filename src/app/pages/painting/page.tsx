"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fabric } from "fabric";
import Style from "./page.module.css";

const CanvasId: string = "canvas";

export default function Home() {
  const [brushColor, setBrushColor] = useState<string>("blue");
  const [brushWidth, setBrushWidth] = useState<number>(10);
  const [canvasWidth, setCanvasWidth] = useState<number>(300);
  const [canvasHeight, setCanvasHeight] = useState<number>(300);
  const [getParams, setParams] = useState<boolean>(false);
  const canvasRef = useRef<fabric.Canvas | null>(null);

  useLayoutEffect(() => {
    const width = Number(new URLSearchParams(location.search).get("width"));
    const height = Number(new URLSearchParams(location.search).get("height"));
    if (300 <= width && width <= 900 && 300 <= height && height <= 900) {
      setCanvasWidth(width);
      setCanvasHeight(height);
      setParams(true);
    }
  }, []);

  useEffect(() => {
    if (getParams) {
      const canvasElement = document.getElementById(
        CanvasId
      ) as HTMLCanvasElement;
      const canvas = new fabric.Canvas(canvasElement, {
        isDrawingMode: true,
        backgroundColor: "white",
        width: canvasWidth,
        height: canvasHeight,
      });
      canvas.freeDrawingBrush.width = 10;
      canvasRef.current = canvas;
    }
  }, [canvasWidth, canvasHeight]);

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
