import MmsIcon from "@mui/icons-material/Mms";
import Styles from "./../page.module.css";

export default function Likebutton() {
  return (
    <>
      <button className={Styles.button}>
        <MmsIcon
          style={{
            fontSize: 20,
          }}
        />
      </button>
    </>
  );
}
