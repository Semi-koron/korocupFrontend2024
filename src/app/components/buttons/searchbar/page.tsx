import SearchIcon from "@mui/icons-material/Search";
import Styles from "./search.module.css";

export default function Searchbar() {
  return (
    <>
      <button className={Styles.button}>
        <SearchIcon
          style={{
            fontSize: 20,
            color: "#42733f",
          }}
        />
      </button>
    </>
  );
}
