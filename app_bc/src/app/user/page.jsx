"use client";
import { useState } from "react";
import { Button } from "@/components/Button";
import {ArticleForm} from "@/components/ArticleForm";
import {ManageArticles} from "@/components/ManageArticles";

export default function User() {
  const [option, setOption] = useState();
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
      <Button onClick={() => setOption("newArticleForm")}>New Article</Button>
      <Button onClick={() => setOption("manageArticles")}>Manage Articles</Button>
      </div>
      {option === "newArticleForm" && <ArticleForm />}
      {option === "manageArticles" && <ManageArticles />}
    </div>
  );
}
