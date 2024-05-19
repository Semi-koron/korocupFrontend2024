import HomeIcon from "@mui/icons-material/Home";
import Styles from "./../page.module.css";

export default function Homebutton() {
  return (
    <>
      <button className={Styles.button}>
        <HomeIcon
          style={{
            fontSize: 20,
            color: "#EEF0ED",
          }}
        />
      </button>
    </>
  );
}
