"use client";
import { Button } from "@/components/Button";
import FrontScroller from "@/components/FrontScroller";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [background, setBackground] = useState(1);
  const [featured, setFeatured] = useState([]);
  const [byLikes, setByLikes] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({});

  useEffect(() => {
    async function load() {
      const res = await axios.get("http://localhost:3001/article/get-all");
      const articles = res.data.artigos;
      setByLikes(
        articles.sort((a, b) => b.article_liked_count - a.article_liked_count)
      );
      setFeatured(articles.filter((item) => item.article_featured));
      setCurrentArticle(
        articles.find((item) => item.article_featured === true)
      );
    }
    load();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground((prev) => {
        if (prev === images.length) {
          return 1;
        }
        return prev + 1;
      });
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
    }, 5000);
    return () => clearInterval(interval);
  });

  // useEffect(() => {
  //   console.log("currentArticle: ", currentArticle);
  //   console.log("byLikes: ", byLikes);
  //   console.log("featured: ", featured);
  // }, [currentArticle, byLikes, featured]);

  return (
    <main>
      <img
        alt="Document image"
        src={`/${background}.jpg`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <FrontScroller
        byLikes={byLikes}
        currentArticle={currentArticle}
        featured={featured}
        setCurrentArticle={setCurrentArticle}
      />
    </main>
  );
}
