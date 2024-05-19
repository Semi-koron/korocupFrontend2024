import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Styles from "./../page.module.css";

export default function Backbutton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button className={Styles.button} onClick={onClick}>
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
