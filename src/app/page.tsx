"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";
import buttons from "./page.module.css";
import Likebutton from "./components/buttons/LIkebutton/page";
import Comentbutton from "./components/buttons/comentbutton/page";
import Downloadbutton from "./components/buttons/downloadbutton/page";

const auth = getAuth(app);

const login = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Likebutton />
      <Comentbutton />
      <Downloadbutton />
    </>
  );
}
