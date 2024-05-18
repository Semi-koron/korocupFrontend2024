import DrawIcon from "@mui/icons-material/Draw";
import Styles from "./draw.module.css";

export default function Drawbutton() {
  return (
    <>
      <button className={Styles.button}>
        <div className={Styles.draw}>お絵かき</div>
        <DrawIcon
          style={{
            fontSize: 20,
            color: "#EEF0ED",
          }}
        />
      </button>
    </>
  );
}
