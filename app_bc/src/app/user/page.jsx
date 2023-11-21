"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function User() {
  const [option, setOption] = useState();
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <h1>User</h1>
      <Button onClick={() => setOption("newUser")}>New Article</Button>
      <Button onClick={() => setOption("manageUsers")}>Manage Articles</Button>
      {option === "newUser" && <p>Formulario newUser</p>}
      {option === "manageUsers" && <p>Lista manageUsers</p>}
    </div>
  );
}
