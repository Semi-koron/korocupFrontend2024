type SikakuProps = {
  color: string;
};

export default function Sikaku(Prop: SikakuProps) {
  const sikakuStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: `${Prop.color}`,
  };
  return (
    <>
      <div style={sikakuStyle}>あ</div>
    </>
  );
}
