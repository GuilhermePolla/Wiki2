"use client";
import { useState } from "react";
import { Button } from "@/components/Button";
import "./styles.css";
import ManageUsers from "@/components/ManageUsers";
import NewUser from "@/components/NewUser";
import { Title } from "@/components/Title";
import ManageArticles from "@/components/ManageArticles";
import NewArticle from "@/components/NewArticle";

export default function Admin() {
  const [option, setOption] = useState();
  return (
    <div className="adminWrapper">
      <div className="adminButtons">
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
          Editar Artigo
        </Button>
        <Button style={{ width: "100%" }} onClick={() => setOption("newUser")}>
          Novo Usuário
        </Button>
        <Button
          style={{ width: "100%" }}
          onClick={() => setOption("manageUsers")}
        >
          Editar Usuários
        </Button>
      </div>
      <div className="adminContent">
        {option === "newArticle" && <NewArticle />}
        {option === "manageArticles" && <ManageArticles admin />}
        {option === "newUser" && <NewUser />}
        {option === "manageUsers" && <ManageUsers />}
      </div>
    </div>
  );
}
