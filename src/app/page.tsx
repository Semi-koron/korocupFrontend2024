
import Likebutton from "./components/buttons/LIkebutton/page";
"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";

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
    </>
  );
}
