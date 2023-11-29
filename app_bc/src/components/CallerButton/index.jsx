import Link from "next/link";
import "./styles.css";
import { ArrowRightCircleIcon } from "lucide-react";

function CallerButton(props) {
  return (
    <Link href={`document/?id=${props.id}`}>
      <div className="buttonWrapper">
        <ArrowRightCircleIcon color="#e55b0b" size="1.8rem" />
        <p>Ler artigo</p>
      </div>
    </Link>
  );
}

export default CallerButton;
