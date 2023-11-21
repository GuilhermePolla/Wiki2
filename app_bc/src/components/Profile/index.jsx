"use client";
import { useState } from "react";
import "./styles.css";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { Button } from "../Button";

export function Profile(props) {
  const [logged, setLogged] = useState(false);
  return (
    <div className="wrapper">
      {!logged ? (
        <>
          <Title>Login</Title>
          <TextInput placeholder="Email" />
          <TextInput placeholder="Senha" type="password" />
          <Button primary>Entrar</Button>
        </>
      ) : (
        <button>Artigos</button>
      )}
    </div>
  );
}
