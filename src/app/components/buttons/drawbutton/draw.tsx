import DrawIcon from "@mui/icons-material/Draw";
import Styles from "./draw.module.css";

export default function Drawbutton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button className={Styles.button} onClick={onClick}>
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
