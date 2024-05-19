"use client";
import { useState } from "react";

export default function Home() {
  const [user_id, setUser_id] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser_id(e.target.value);
  };

  const send = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:8080/auth/create/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        user_id: user_id,
        icon: 0,
        profile: 0,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <input type="text" value={user_id} onChange={handleChange} />
      <button onClick={send}>送信</button>
    </>
  );
}
