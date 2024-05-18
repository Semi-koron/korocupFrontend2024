import Styles from "./decide.module.css";

export default function Decidebutton() {
  return (
    <>
      <button className={Styles.button}>
        <div
          style={{
            fontSize: 15,
            color: "#EEF0ED",
          }}
        >
          決定
        </div>
      </button>
    </>
  );
}
