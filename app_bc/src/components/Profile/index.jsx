// "use client";
import "./styles.css";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export async function Profile({ session, setSession }) {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    const session = await response.json();
    if (session.logged && session.type === "user") {
      setSession(session);
      return;
    }
    if (session.logged && session.type === "admin") {
      setSession(session);
      return;
    }
    setSession(undefined);
    alert("Erro ao fazer login");
  }

  async function handleLogout() {
    const response = await fetch("/sessions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const session = await response.json();
    if (!session.logged) {
      setSession(undefined);
      return router.push("/");
    }
    alert("Erro ao fazer logout");
  }

  return (
    <>
      {session?.logged ? (
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
                sizes="200px"
                as="img"
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
            <TextInput name="email" placeholder="Email" />
            <TextInput name="password" placeholder="Senha" type="password" />
            <Button style={{ width: "100%" }} primary type="submit">
              Entrar
            </Button>
          </div>
        </form>
      )}
    </>
  );
}
