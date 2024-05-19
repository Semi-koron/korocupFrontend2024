"use client";
import { useState } from "react";
import Styles from "./box1.module.css";
import Modal from "react-modal";
import { modalstyle } from "../modal/modal";
import { useRouter } from "next/navigation";
import Likebutton from "../buttons/LIkebutton/like";
import Commentbutton from "../buttons/comentbutton/comment";
import Downloadbutton from "../buttons/downloadbutton/download";
import { set } from "firebase/database";

export default function Box1({
  canvasElement,
  workID,
}: {
  canvasElement: HTMLCanvasElement;
  workID: string;
}) {
  const [makeMode, setMakeMode] = useState<boolean>(false);
  const [selectWidth, setSelectWidth] = useState<number>(550);
  const [selectHeight, setSelectHeight] = useState<number>(550);

  const handleWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectWidth(Number(e.target.value));
  };
  const handleHaight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectHeight(Number(e.target.value));
  };

  const router = useRouter();
  const download = () => {
    // ここにダウンロード処理を書くconst download = () => {
    const dataURL: string = canvasElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvasImage.png"; // 任意のファイル名を設定します
    link.click(); // ダウンロードを開始します
  };

  const change = () => {
    setMakeMode(true);
  };

  const makeCanvas = () => {
    router.push(
      `/pages/painting?width=${selectWidth}&height=${selectHeight}&?workId=${workID}`
    );
  };

  const createComment = () => {
    setMakeMode(true);
  };
  return (
    <>
      <div className={Styles.box1}>
        <Likebutton />
        <Commentbutton
          onClick={() => {
            createComment();
          }}
        />
        <Downloadbutton
          onClick={() => {
            download();
          }}
        />
        <Modal
          isOpen={makeMode}
          style={modalstyle}
          onRequestClose={() => {
            setMakeMode(false);
          }}
        >
          <div className={Styles.modal_section}>
            <h2>キャンバスのサイズを選択してください</h2>
            <div>
              <div>width</div>
              <input type="range" min={200} max={900} onChange={handleWidth} />
              <span>{selectWidth}px</span>
            </div>
            <div>
              <div>height</div>
              <input type="range" min={200} max={900} onChange={handleHaight} />

              <span>{selectHeight}px</span>
            </div>
          </div>
          <div className={Styles.select_button}>
            <button onClick={makeCanvas}>キャンバスを作製する</button>
          </div>
        </Modal>
      </div>
    </>
  );
}
