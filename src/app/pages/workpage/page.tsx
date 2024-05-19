"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Styles from "./page.module.css";
import Work from "@/app/components/work/work";
import Backbutton from "@/app/components/buttons/backbutton/back";

type workData = {
  ID: number;
  UserName: string;
  Image: string;
  Reply: number;
  Like: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
};

export default function Home() {
  const [work, setWork] = useState<any>();
  const router = useRouter();
  //クエリパラメータから取得
  const Id: number = Number(useSearchParams().get("workID"));
  useEffect(() => {
    //APIからデータを取得
    const getWork = async () => {
      const res = await fetch(`http://localhost:8080/get/post/${Id}`, {
        method: "GET",
      });
      const data: workData[] = await res.json();
      setWork(data[0]);
    };
    getWork();
  }, [Id]);

  const back = () => {
    router.push("/");
  };

  if (!work) {
    return <h1>loading...</h1>;
  } else {
    return (
      <>
        <h1>Be fiction</h1>
        <div className={Styles.background}>
          <Backbutton
            onClick={() => {
              back();
            }}
          />
          <Work Image={work.Image} Id={work.ID} />
        </div>
      </>
    );
  }
}
