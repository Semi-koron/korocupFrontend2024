import Styles from "./name.module.css";

export default function Displayname() {
  return (
    <>
      <input
        className={Styles.kennsaku_bar}
        type="search"
        placeholder="表示名を入力"
      />
    </>
  );
}
