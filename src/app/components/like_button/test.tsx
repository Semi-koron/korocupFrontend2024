import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Styles from "./page.module.css";
export default function Likebutton() {
  return (
    <>
      <h1>Helloday</h1>
      <button className={Styles.like_button}>
        <ThumbUpOffAltIcon
          style={{
            fontSize: 20,
          }}
        />
      </button>
    </>
  );
}
