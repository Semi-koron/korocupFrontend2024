"use client";

import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import Style from "./page.module.css";
import { modalstyle } from "./components/modal/modal";
import Modal from "react-modal";
import Link from "next/link";

const auth = getAuth(app);

const login = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export default function Home() {
  const [makeMode, setMakeMode] = useState<boolean>(false);
  const [selectWidth, setSelectWidth] = useState<number>(300);
  const [selectHeight, setSelectHeight] = useState<number>(300);

  return (
    <>
      <h1>Hello World</h1>
      <Link href="pages/painting">Painting</Link>
      <button onClick={login}>login</button>
      <button
        onClick={() => {
          setMakeMode(true);
        }}
      >
        投稿する
      </button>
      <Modal
        isOpen={makeMode}
        style={modalstyle}
        onRequestClose={() => {
          setMakeMode(false);
        }}
      >
        <div className={Style.modal_section}>
          <h2>キャンバスのサイズを選択してください</h2>
          <div>
            <div>width</div>
            <input type="range" />
            <span>{selectWidth}px</span>
          </div>
          <div>
            <div>height</div>
            <input type="range" />

            <span>{selectWidth}px</span>
          </div>
        </div>
        <div className={Style.select_button}>
          <button>投稿</button>
        </div>
      </Modal>
    </>
  );
}
