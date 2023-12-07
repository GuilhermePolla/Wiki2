import { LucideChevronRight } from "lucide-react";
import { Button } from "../Button";
import "./styles.css";
import dateConverter from "@/utils/dateConverter";
import Label from "../Label";
import { useRouter } from "next/navigation";

function ArticleCard(props) {
  const router = useRouter();
  return (
    <div className="articleCardWrapper">
      <h1>{props.article.article_title}</h1>
      <Label text="Keywords:" />
      <p style={{ color: "#ddd" }}>
        {props.article.article_keywords.map((current) => current + " ")}
      </p>
      <Label text="Data de publicação:" />
      <p style={{ color: "#ddd" }}>
        {dateConverter(props.article.article_published_date)}
      </p>
      <Button
        primary
        style={{ display: "flex", width: "fit-content", heigh: "fit-content" }}
        onClick={() => router.push(`/document?id=${props.article._id}`)}
      >
        <p>Ler</p> <LucideChevronRight size={22} />
      </Button>
    </div>
  );
}

export default ArticleCard;
