"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";
import buttons from "./page.module.css";
import Likebutton from "./components/buttons/LIkebutton/page";
import Comentbutton from "./components/buttons/comentbutton/page";
import Downloadbutton from "./components/buttons/downloadbutton/page";
import Searchbar from "./components/buttons/searchbar/page";
import Homebutton from "./components/buttons/homebutton/page";
import ArrowBackIcon from "./components/buttons/backbutton/page";
import Kensakubar from "./components/buttons/kennsakubar/page";
import Drawbutton from "./components/buttons/drawbutton/page";
import Editbutton from "./components/buttons/editbutton/page";

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
      <Searchbar />
      <Homebutton />
      <ArrowBackIcon />
      <Kensakubar />
      <Drawbutton />
      <Editbutton />
    </>
  );
}
