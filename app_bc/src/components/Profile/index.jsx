"use client";
import { useState } from "react";
import "./styles.css";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { Button } from "../Button";

export function Profile(props) {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setLogged(true);
      return router.push("/admin");
    } else {
      alert("Erro ao fazer login");
    }
  };

  return (
    <div className="wrapper">
      {!logged ? (
        <form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <TextInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button primary type="submit">
            Entrar
          </Button>
        </form>
      ) : (
        <button>Artigos</button>
      )}
    </div>
  );
}
