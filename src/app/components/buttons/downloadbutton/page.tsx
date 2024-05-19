import DownloadIcon from "@mui/icons-material/Download";
import Styles from "./../page.module.css";

export default function Downloadbutton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button className={Styles.button}>
        <DownloadIcon
          style={{
            fontSize: 20,
            color: "#EEF0ED",
          }}
        />
      </button>
    </>
  );
}
