"use client";
import { Button } from "@/components/Button";
import FrontScroller from "@/components/FrontScroller";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [byLikes, setByLikes] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({});

  useEffect(() => {
    async function load() {
      const res = await axios.get("http://localhost:3001/article/get-all");
      const articles = res.data.artigos;

      const featured = articles.filter(
        (item) => item.article_featured && item.article_published
      );
      const byLikes = articles
        .filter((item) => item.article_published)
        .sort((a, b) => b.article_liked_count - a.article_liked_count);

      setFeatured(featured);
      setByLikes(byLikes);
      setCurrentArticle(featured[0]);
    }
    load();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticle((prev) => {
        const index = featured.findIndex((item) => item._id === prev._id);
        if (index === -1) {
          return featured[0];
        }
        if (index === featured.length - 1) {
          return featured[0];
        }
        return featured[index + 1];
      });
    }, 10000);
    return () => clearInterval(interval);
  });

  // useEffect(() => {
  //   console.log("currentArticle: ", currentArticle);
  //   console.log("byLikes: ", byLikes);
  //   console.log("featured: ", featured);
  // }, [currentArticle, byLikes, featured]);

  return (
    <main>
      <FrontScroller
        byLikes={byLikes}
        currentArticle={currentArticle}
        featured={featured}
        setCurrentArticle={setCurrentArticle}
      />
    </main>
  );
}
