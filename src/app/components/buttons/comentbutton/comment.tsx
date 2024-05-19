import MmsIcon from "@mui/icons-material/Mms";
import Styles from "./../page.module.css";

export default function Commentbutton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button className={Styles.button} onClick={onClick}>
        <MmsIcon
          style={{
            fontSize: 20,
            color: "#EEF0ED",
          }}
        />
      </button>
    </>
  );
}
