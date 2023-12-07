import "./styles.css";
import { SearchIcon } from "lucide-react";
import { TextInput } from "../TextInput";

export function SearchInput({ onClick, ...props }) {
  return (
    <div className="searchWrapper">
      <TextInput placeholder="Keywords..." {...props} />
      <SearchIcon className="icon" onClick={onClick} />
      <p style={{ color: "#969696", fontSize: "12px" }}>
        Separadas apenas por uma vírgula.
      </p>
    </div>
  );
}
