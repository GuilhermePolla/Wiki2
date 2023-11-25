"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

export function Profile(props) {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch("/sessions");
      const session = await response.json();
      setLogged(session.logged);
    }
    fetchSession();
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const session = await response.json();
    if (session.logged && session.type === "user") {
      setLogged(true);
      return router.push("/user");
    }
    if (session.logged && session.type === "admin") {
      setLogged(true);
      return router.push("/admin");
    }
    alert("Erro ao fazer login");
  }

  async function handleLogout() {
    const response = await fetch("/sessions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const session = await response.json();
    if (!session.logged) {
      setLogged(false);
      setEmail("");
      setPassword("");
      return router.push("/");
    }
    alert("Erro ao fazer logout");
  }

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
        <Button primary type="button" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}
