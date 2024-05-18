"use client";

import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Style from "./page.module.css";
import { modalstyle } from "./components/modal/modal";
import Modal from "react-modal";
import Link from "next/link";
import buttons from "./components/buttons/editbutton/page";
import Profilebutton from "./components/buttons/icon.profilebutton/page";

const auth = getAuth(app);

const login = async () => {
  const provider = new GoogleAuthProvider();
  // トークンを取得
  const result = await signInWithPopup(auth, provider);
  //トークンをローカルに保存
  localStorage.setItem("token", (await result.user.getIdTokenResult()).token);
  const postToken = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:8080/auth/create/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ token: token }),
    });
    const data = await res.json();
    console.log(data);
  };
  postToken();
};

export default function Home() {
  const [makeMode, setMakeMode] = useState<boolean>(false);
  const [selectWidth, setSelectWidth] = useState<number>(550);
  const [selectHeight, setSelectHeight] = useState<number>(550);

  const router = useRouter();

  const handleWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectWidth(Number(e.target.value));
  };
  const handleHaight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectHeight(Number(e.target.value));
  };

  const makeCanvas = () => {
    router.push(`/pages/painting?width=${selectWidth}&height=${selectHeight}`);
  };
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
            <input type="range" min={200} max={900} onChange={handleWidth} />
            <span>{selectWidth}px</span>
          </div>
          <div>
            <div>height</div>
            <input type="range" min={200} max={900} onChange={handleHaight} />

            <span>{selectHeight}px</span>
          </div>
        </div>
        <div className={Style.select_button}>
          <button onClick={makeCanvas}>キャンバスを作製する</button>
        </div>
      </Modal>
    </>
  );
}
