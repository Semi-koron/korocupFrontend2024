import Styles from "./profile.module.css";

export default function Profilebutton() {
  return (
    <>
      <button className={Styles.button}>
        <div
          style={{
            fontSize: 15,
            color: "#EEF0ED",
          }}
        >
          編集をする
        </div>
      </button>
    </>
  );
}
