"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";
import Link from "next/link";
import buttons from "./components/buttons/editbutton/page";
import Profilebutton from "./components/buttons/icon.profilebutton/page";

const auth = getAuth(app);

const login = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="pages/painting">Painting</Link>
      <button onClick={login}>login</button>
      <Profilebutton />
    </>
  );
}
