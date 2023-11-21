"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function Admin() {
  const [option, setOption] = useState();
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <h1>Admin</h1>
      <Button onClick={() => setOption("newArticle")}>New Article</Button>
      <Button onClick={() => setOption("manageArticles")}>
        Manage Articles
      </Button>
      <Button onClick={() => setOption("newUser")}>New User</Button>
      <Button onClick={() => setOption("manageUsers")}>Manage Users</Button>
      {option === "newArticle" && <p>Formulario newArticle</p>}
      {option === "manageArticles" && <p>Lista manageArticles</p>}
      {option === "newUser" && <p>Formulario newUser</p>}
      {option === "manageUsers" && <p>Lista manageUsers</p>}
    </div>
  );
}
