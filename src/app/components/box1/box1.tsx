import Styles from "./box1.module.css";
import Likebutton from "../buttons/LIkebutton/Likebutton";
import Commentbutton from "../buttons/comentbutton/commentbutton";
import Downloadbutton from "../buttons/downloadbutton/downloadbutton";

export default function Box1() {
  return (
    <>
      <div className={Styles.box1}>
        <Likebutton />
        <Commentbutton />
        <Downloadbutton />
      </div>
    </>
  );
}
