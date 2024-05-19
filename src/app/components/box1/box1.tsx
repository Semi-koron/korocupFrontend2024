import Styles from "./box1.module.css";
import Likebutton from "../buttons/LIkebutton/like";
import Commentbutton from "../buttons/comentbutton/comment";
import Downloadbutton from "../buttons/downloadbutton/download";

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
