import Styles from "./canvas.module.css";

export default function Canvasbutton() {
  return (
    <>
      <button className={Styles.button}>
        <div
          style={{
            fontSize: 15,
            color: "#EEF0ED",
          }}
        >
          キャンバスを作成
        </div>
      </button>
    </>
  );
}
