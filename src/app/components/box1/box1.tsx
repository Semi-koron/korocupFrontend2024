import Styles from "./box1.module.css";
import Likebutton from "../buttons/LIkebutton/page";
import Commentbutton from "../buttons/comentbutton/page";
import Downloadbutton from "../buttons/downloadbutton/page";

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
