"use client";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fabric } from "fabric";
import { SprayBrush } from "fabric/fabric-impl";
import Style from "./page.module.css";
import { set } from "firebase/database";
import { clear } from "console";

const CanvasId: string = "canvas";

export default function Home() {
  const [brushColor, setBrushColor] = useState<string>("#000000");
  const [brushWidth, setBrushWidth] = useState<number>(10);
  const [canvasWidth, setCanvasWidth] = useState<number>(550);
  const [canvasHeight, setCanvasHeight] = useState<number>(550);
  const [getParams, setParams] = useState<boolean>(false);
  const [penMode, setPenMode] = useState<string>("pencil");
  const canvasRef = useRef<fabric.Canvas | null>(null);

  const router = useRouter();

  useLayoutEffect(() => {
    const width = Number(new URLSearchParams(location.search).get("width"));
    const height = Number(new URLSearchParams(location.search).get("height"));
    if (300 <= width && width <= 900 && 300 <= height && height <= 900) {
      setCanvasWidth(width);
      setCanvasHeight(height);
      setParams(true);
    } else {
      alert("300以上900以下の値を入力してください");
      router.push("/");
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
      if (penMode === "eraser") {
        // 消しゴムに変更
        canvasRef.current.freeDrawingBrush = new fabric.PencilBrush(
          canvasRef.current
        );
        canvasRef.current.freeDrawingBrush.color = "#ffffff";
        canvasRef.current.freeDrawingBrush.width = brushWidth;
      } else {
        if (penMode === "spray") {
          // スプレーブラシに変更
          canvasRef.current.freeDrawingBrush = new fabric.SprayBrush(
            canvasRef.current
          );
        }
        if (penMode === "circle") {
          // 円に変更
          canvasRef.current.freeDrawingBrush = new fabric.CircleBrush(
            canvasRef.current
          );
        }
        if (penMode === "pencil") {
          // ペンに変更
          canvasRef.current.freeDrawingBrush = new fabric.PencilBrush(
            canvasRef.current
          );
        }
        canvasRef.current.freeDrawingBrush.color = brushColor;
        canvasRef.current.freeDrawingBrush.width = brushWidth;
      }
    }
  }, [penMode, brushColor, brushWidth]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canvasRef.current) {
      setBrushColor(e.target.value);
    }
  };

  const handlewidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canvasRef.current) {
      setBrushWidth(Number(e.target.value));
    }
  };

  const clearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
      canvasRef.current.dispose();
    }

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
      <button
        onClick={() => {
          setPenMode("circle");
        }}
      >
        円
      </button>
      <button
        onClick={() => {
          setPenMode("pencil");
        }}
      >
        ペン
      </button>
      <button
        onClick={() => {
          setPenMode("spray");
        }}
      >
        スプレー
      </button>
      <button
        onClick={() => {
          setPenMode("eraser");
        }}
      >
        消しゴム
      </button>
      <input
        type="range"
        min={1}
        max={50}
        onChange={handlewidthChange}
        value={brushWidth}
      />
      <span>{brushWidth}</span>
      <button onClick={clearCanvas}>クリア</button>
      <button onClick={toJson}>toJson</button>
    </>
  );
}
