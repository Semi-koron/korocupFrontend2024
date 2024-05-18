import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Styles from "./../page.module.css";

export default function Likebutton() {
  return (
    <>
      <button className={Styles.button}>
        <ThumbUpOffAltIcon
          style={{
            fontSize: 20,
            color: "#EEF0ED",
          }}
        />
      </button>
    </>
  );
}
