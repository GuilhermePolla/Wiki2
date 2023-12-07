"use client";
import { useState } from "react";
import { Button } from "@/components/Button";
import NewArticle from "@/components/NewArticle";
import ManageArticles from "@/components/ManageArticles";
import { Title } from "@/components/Title";
import "./styles.css";

export default function User() {
  const [option, setOption] = useState();
  return (
    <div className="userWrapper">
      <div className="userButtons">
        <Title>Opções</Title>
        <Button
          style={{ width: "100%" }}
          onClick={() => setOption("newArticle")}
        >
          Novo Artigo
        </Button>
        <Button
          style={{ width: "100%" }}
          onClick={() => setOption("manageArticles")}
        >
          Editar Artigos
        </Button>
      </div>
      <div className="userContent">
        {option === "newArticle" && <NewArticle />}
        {option === "manageArticles" && <ManageArticles user />}
      </div>
    </div>
  );
}
