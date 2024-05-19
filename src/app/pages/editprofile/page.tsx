"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user_id, setUser_id] = useState<string>("");
  const router = useRouter();

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
        user_name: user_id,
        icon: null,
        profile: 0,
      }),
    });
    const data = await res.json();
    if (res.status === 404) {
      alert("エラーが発生しました");
      router.push("/");
      return;
    } else if (res.status === 200) {
      alert("ユーザーを作成しました");
      router.push("/");
      return;
    }
  };

  return (
    <>
      <h1>ユーザー作成</h1>
      <input
        type="text"
        value={user_id}
        onChange={handleChange}
        placeholder="ディスプレイネームを入力"
      />
      <button onClick={send}>送信</button>
    </>
  );
}
