"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import Box1 from "../box1/box1"; // Fix: Import the default export from './../box1/page'
import { fabric } from "fabric";
import Style from "./page.module.css";
import Link from "next/link";

export default function Work({ Image, Id }: { Image: string; Id: string }) {
  const [data, setData] = useState<any>();
  const [downloadElement, setDownloadElement] = useState<HTMLCanvasElement>();
  useLayoutEffect(() => {
    const Json: any = JSON.parse(Image);
    setData(Json);
  }, []);

  useEffect(() => {
    if (data) {
      const canvasElement = document.getElementById(Id) as HTMLCanvasElement;
      setDownloadElement(canvasElement);
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
        <Link href={`/pages/workpage?workID=${Id}`}>
          <canvas id={Id}></canvas>
        </Link>
        {downloadElement && (
          <Box1 canvasElement={downloadElement} workID={Id} />
        )}
      </div>
    </>
  );
}
