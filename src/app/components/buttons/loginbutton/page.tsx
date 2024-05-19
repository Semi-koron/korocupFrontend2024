import Styles from "./login.module.css";

export default function Loginbutton() {
  return (
    <>
      <button className={Styles.button}>
        <div className={Styles.draw}>ログイン</div>
      </button>
    </>
  );
}
