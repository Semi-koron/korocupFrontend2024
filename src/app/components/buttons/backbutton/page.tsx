import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Styles from "./../page.module.css";

export default function Commentbutton() {
  return (
    <>
      <button className={Styles.button}>
        <ArrowBackIcon
          style={{
            fontSize: 20,
            color: "#EEF0ED",
          }}
        />
      </button>
    </>
  );
}
