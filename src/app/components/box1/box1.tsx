import Styles from "./box1.module.css";
import Likebutton from "../buttons/LIkebutton/like";
import Commentbutton from "../buttons/comentbutton/comment";
import Downloadbutton from "../buttons/downloadbutton/download";

export default function Box1({
  canvasElement,
}: {
  canvasElement: HTMLCanvasElement;
}) {
  const download = () => {
    // ここにダウンロード処理を書くconst download = () => {
    const dataURL: string = canvasElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvasImage.png"; // 任意のファイル名を設定します
    link.click(); // ダウンロードを開始します
  };
  return (
    <>
      <div className={Styles.box1}>
        <Likebutton />
        <Commentbutton />
        <Downloadbutton
          onClick={() => {
            download();
          }}
        />
      </div>
    </>
  );
}
