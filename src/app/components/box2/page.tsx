import Styles from "./box2.module.css";
import CreateIcon from "@mui/icons-material/Create";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import AirIcon from "@mui/icons-material/Air";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

export default function Box2() {
  return (
    <>
      <div className={Styles.box}>
        <button className={Styles.box1}>
          <CreateIcon
            style={{
              fontSize: 20,
              color: "#EEF0ED",
            }}
          />
        </button>
        <button className={Styles.box1}>
          <AutoFixHighIcon
            style={{
              fontSize: 20,
              color: "#EEF0ED",
            }}
          />
        </button>
        <button className={Styles.box1}>
          <DeleteIcon
            style={{
              fontSize: 20,
              color: "#EEF0ED",
            }}
          />
        </button>
      </div>
    </>
  );
}
