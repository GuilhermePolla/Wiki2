// "use client";
import "./styles.css";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";

export async function Profile({ session, setSession }) {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/sessions", {
        email: "nomeusuario3",
        password: "senha123",
      });

      if (res.data !== null) {
        setSession(res.data);
        return;
      } else {
        setSession(null);
        alert("Erro ao fazer login");
      }

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    const response = await axios.delete("/sessions");
    const session = response.data;
    if (session === null) {
      setSession(null);
      return router.push("/");
    }
    alert("Erro ao fazer logout");
  }

  return (
    <>
      {session !== null ? (
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
            <Title>Olá, {session.authorUser}</Title>
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
