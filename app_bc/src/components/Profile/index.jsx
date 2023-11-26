// "use client";
import { useEffect, useState } from "react";
import "./styles.css";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useSession from "@/utils/useSession";

export async function Profile(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  const router = useRouter();
  const session = await useSession();

  // useEffect(() => {
  //   async function fetchSession() {
  //     const response = await fetch("/sessions");
  //     const session = await response.json();
  //     setLogged(session.logged);
  //     setUsername(session.username);
  //   }
  //   if (!logged) {
  //     fetchSession();
  //   }
  // }, [logged]);

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
      setUsername(session.username);
      return router.push("/user");
    }
    if (session.logged && session.type === "admin") {
      setLogged(true);
      setUsername(session.username);
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
      {session.logged ? (
        <div className="loggedWrapper">
          <div className="loggedMenuWrapper">
            <div className="avatarWrapper">
              <Image
                className="avatar"
                src="https://picsum.photos/200"
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL={"https://picsum.photos/200"}
                alt="user avatar"
              />
            </div>
            <Title>Olá, {session.username}</Title>
            <hr />
            <Button style={{ width: "100%" }} type="button">
              Change Username
            </Button>
            <Button style={{ width: "100%" }} type="button">
              Change Email
            </Button>
            <Button style={{ width: "100%" }} type="button">
              Change Password
            </Button>
          </div>
          <Button
            style={{ width: "100%" }}
            primary
            type="button"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formWrapper">
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
            <Button style={{ width: "100%" }} primary type="submit">
              Entrar
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
