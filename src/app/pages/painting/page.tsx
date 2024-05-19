"use client";
import { useEffect, useLayoutEffect, useRef, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fabric } from "fabric";
import Style from "./page.module.css";
import { styleText } from "util";
import { set } from "firebase/database";

const CanvasId: string = "canvas";

const CanvasComponent = () => {
  const [brushColor, setBrushColor] = useState<string>("#000000");
  const [brushWidth, setBrushWidth] = useState<number>(10);
  const [canvasWidth, setCanvasWidth] = useState<number>(0);
  const [canvasHeight, setCanvasHeight] = useState<number>(0);
  const [reply, setreply] = useState<number>(0);
  const [getParams, setParams] = useState<boolean>(false);
  const [penMode, setPenMode] = useState<string>("pencil");
  const canvasRef = useRef<fabric.Canvas | null>(null);

  const router = useRouter();
  const width: number = Number(useSearchParams().get("width"));
  const height: number = Number(useSearchParams().get("height"));
  const workID: number = Number(useSearchParams().get("workId"));

  useLayoutEffect(() => {
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

      setreply(workID);
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

  const post = async () => {
    if (canvasRef.current) {
      const token = localStorage.getItem("token");
      const img = canvasRef.current.toJSON();
      const canvasData = {
        image: img,
        height: canvasHeight,
        width: canvasWidth,
      };
      const strCanvasData = JSON.stringify(canvasData);
      const username: string = "test";
      const res = await fetch("http://localhost:8080/auth/create/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          username: username,
          image: `${strCanvasData}`,
          likes: 0,
          reply: reply,
        }),
      });
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        お絵描きページ
      </h1>
      <div className={Style.waku}>
        <canvas id={CanvasId} className={Style.canvas}></canvas>
        <div className={Style.tools}>
          <button
            onClick={() => {
              setPenMode("pencil");
            }}
            className={Style.eraser}
          >
            {" "}
            <div
              style={{
                fontSize: 15,
                color: "#EEF0ED",
              }}
            >
              ペン
            </div>
          </button>
          <button
            onClick={() => {
              setPenMode("eraser");
            }}
            className={Style.eraser}
          >
            {" "}
            <div
              style={{
                fontSize: 15,
                color: "#EEF0ED",
              }}
            >
              消しゴム
            </div>
          </button>
          <input
            type="range"
            min={1}
            max={50}
            onChange={handlewidthChange}
            value={brushWidth}
          />
          <span>{brushWidth}</span>
          <button onClick={clearCanvas} className={Style.eraser}>
            <div
              style={{
                fontSize: 15,
                color: "#EEF0ED",
              }}
            >
              クリア
            </div>
          </button>
          <button onClick={toJson} className={Style.eraser}>
            <div
              style={{
                fontSize: 15,
                color: "#EEF0ED",
              }}
            >
              toJson
            </div>
          </button>

          <input type="color" onChange={handleColorChange} value={brushColor} />
          <button onClick={post} className={Style.eraser}>
            <div
              style={{
                fontSize: 15,
                color: "#EEF0ED",
              }}
            >
              投稿する
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CanvasComponent />
    </Suspense>
  );
}
