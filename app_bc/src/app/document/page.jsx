"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Document() {
  const [article, setArticle] = useState(undefined);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    async function getArticle() {
      try {
        const article = await axios.get(
          `http://localhost:3001/article/get-by-id/${id}`
        );
        // const author = await axios.get(
        //   `http://localhost:3001/user/get-by-id/${article.data.artigo.article_author_id}`
        // );
        setArticle(article.data.artigo);
      } catch (err) {
        console.log(err);
      }
    }
    getArticle();
  }, []);

  return (
    <div className="documentWrapper">
      <div className="articleWrapper">
        <div className="articleText">
          <h1>{article?.article_title}</h1>
          <hr />
          <p>{article?.article_body}</p>
        </div>
        <div className="articleInfo">
          <h2>Id:</h2>
          <p>{article?._id}</p>
          <h2>Publicação:</h2>
          <p>{article?.article_published_date}</p>
          <h2>Likes:</h2>
          <p>{article?.article_liked_count}</p>
        </div>
      </div>
    </div>
  );
}
