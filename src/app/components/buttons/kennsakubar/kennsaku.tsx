import MmsIcon from "@mui/icons-material/Mms";
import Styles from "./kennsakubar.module.css";
import React from "react";
import { Search } from "@mui/icons-material";
import Searchbar from "../searchbar/searchbar";

export default function Kensakubar() {
  return (
    <>
      <div className={Styles.searchbar}>
        <input
          className={Styles.kennsaku_bar}
          type="search"
          placeholder="検索ワードを入力"
        />
        <Searchbar />
      </div>
    </>
  );
}
