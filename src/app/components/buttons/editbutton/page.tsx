import Styles from "./edit.module.css";

export default function Editbutton() {
  return (
    <>
      <button className={Styles.button}>
        <div
          style={{
            fontSize: 15,
            color: "#EEF0ED",
          }}
        >
          編集
        </div>
      </button>
    </>
  );
}
