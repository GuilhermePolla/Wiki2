"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles.css";
import { ThumbsUp } from "lucide-react";
import dateConverter from "@/utils/dateConverter";

async function handleLike(id, setArticle, setAuthor) {
  try {
    const res = await axios.post(`http://localhost:3001/article/like/${id}`);
    if (res.status === 200) {
      getArticle(id, setArticle, setAuthor);
      alert("Liked!");
    } else {
      alert("Error!");
    }
  } catch (err) {
    console.log(err);
  }
}

async function getArticle(id, setArticle, setAuthor) {
  try {
    const article = await axios.get(
      `http://localhost:3001/article/get-by-id/${id}`
    );
    const author = await axios.get(
      `http://localhost:3001/author/get-by-id/${article.data.artigo.article_author_id}`
    );
    setArticle(article.data.artigo);
    setAuthor(author.data.autor);
  } catch (err) {
    console.log(err);
  }
}

export default function Document() {
  const [article, setArticle] = useState(undefined);
  const [author, setAuthor] = useState(undefined);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    getArticle(id, setArticle, setAuthor);
  }, []);

  return (
    <div className="documentWrapper">
      <div className="articleWrapper">
        <div className="articleText">
          <div className="articleHeader">
            <h1>{article?.article_title}</h1>
            <div className="likeWrapper">
              <p>{article?.article_liked_count}</p>
              <ThumbsUp
                size={25}
                onClick={() => handleLike(id, setArticle, setAuthor)}
              />
            </div>
          </div>
          <hr />
          <div className="articleBody">
            <p>{article?.article_body}</p>
          </div>
        </div>
        <div className="articleInfo">
          <h2>Autor:</h2>
          <p>{author?.authorName}</p>
          <h2>Email:</h2>
          <p>{author?.authorUser}</p>
          <h2>Publicação:</h2>
          <p>{dateConverter(article?.article_published_date)}</p>
        </div>
      </div>
    </div>
  );
}
