"use client";
import { useState } from "react";
import { Button } from "@/components/Button";
import "./styles.css";
import ManageUsers from "@/components/ManageUsers";

export default function Admin() {
  const [option, setOption] = useState();
  return (
    <div className="adminWrapper">
      <div className="adminButtons">
        <Button
          style={{ width: "100%" }}
          onClick={() => setOption("newArticle")}
        >
          New Article
        </Button>
        <Button
          style={{ width: "100%" }}
          onClick={() => setOption("manageArticles")}
        >
          Manage Articles
        </Button>
        <Button style={{ width: "100%" }} onClick={() => setOption("newUser")}>
          New User
        </Button>
        <Button
          style={{ width: "100%" }}
          onClick={() => setOption("manageUsers")}
        >
          Manage Users
        </Button>
      </div>
      <div className="adminContent">
        {option === "newArticle" && <p>Formulario newArticle</p>}
        {option === "manageArticles" && <p>Lista manageArticles</p>}
        {option === "newUser" && <p>Formulario newUser</p>}
        {option === "manageUsers" && <ManageUsers />}
      </div>
    </div>
  );
}
