"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import ArticleCard from "@/components/ArticleCard";

function printArray(array) {
  const split = array.split(",");
  if (split.length === 1) return split.toString();
  const spaced = split.map((item) => " " + item).toString();
  return spaced;
}

async function handleSearch(keywords, setArticles) {
  try {
    const res = await axios.get(
      `http://localhost:3001/article/search/${keywords}`
    );
    if (res.status === 200) {
      setArticles(res.data.result);
    }
  } catch (err) {
    alert("Erro ao buscar artigos");
    console.log(err);
  }
}

function SearchPage() {
  const [articles, setArticles] = useState([]);
  const searchParams = useSearchParams();
  const keywords = searchParams.get("keywords");

  useEffect(() => {
    handleSearch(keywords, setArticles);
  }, [searchParams]);

  return (
    <div className="searchPageWrapper">
      <h1 style={{ color: "white" }}>
        Resultado da busca por:{" "}
        <span style={{ color: "#e55b0b" }}>{printArray(keywords)}.</span>
      </h1>
      <div className="cardsWrapper">
        {articles.length !== 0 &&
          articles.map((current) => <ArticleCard article={current} />)}
        {articles.length === 0 && (
          <p style={{ color: "white", fontSize: "24px" }}>
            Nenhum artigo encontrado
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
