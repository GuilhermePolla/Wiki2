import "./styles.css";
import { SearchIcon } from "lucide-react";
import { TextInput } from "../TextInput";

export function SearchInput({ onClick, ...props }) {
  return (
    <div className="searchWrapper">
      <TextInput placeholder="Procurar..." {...props} />
      <SearchIcon className="icon" onClick={onClick} />
    </div>
  );
}
