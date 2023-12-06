import "./styles.css";
import Select from "../Select";
import { Title } from "../Title";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import Label from "../Label";
import useSession from "@/utils/useSession";
import axios from "axios";

async function handleSubmit(e) {
  e.preventDefault();
  try {
    const session = await useSession();

    const res = await axios.post(
      "http://localhost:3001/author/save",
      {
        authorName: e.target.authorName.value,
        authorUser: e.target.authorUser.value,
        authorPwd: e.target.authorPwd.value,
        authorEmail: e.target.authorEmail.value,
        authorLevel: e.target.authorLevel.value,
        authorStatus: e.target.authorStatus.value,
      },
      {
        headers: {
          Authorization: `${session.authorToken}`,
        },
      }
    );
    if (res.status === 200) {
      alert("Usuário criado com sucesso");
    }
  } catch (err) {
    alert("Erro ao criar usuário");
    console.log(err);
  }
}

function NewUser() {
  return (
    <div className="outerWrapper">
      <form onSubmit={handleSubmit} style={{ width: "100%", height: "100%" }}>
        <div className="newUserInputsWrapper">
          <Title>Novo Usuário</Title>
          <div className="newUserInputs">
            <Label htmlFor="authorName" text="Nome:" />
            <TextInput
              id="authorName"
              name="authorName"
              defaultValue=""
              required
            />
            <Label htmlFor="authorUser" text="Usuário:" />
            <TextInput
              id="authorUser"
              name="authorUser"
              defaultValue=""
              required
            />
            <Label htmlFor="authorEmail" text="Email:" />
            <TextInput
              id="authorEmail"
              type="email"
              name="authorEmail"
              defaultValue=""
              required
            />
            <Label htmlFor="authorPwd" text="Senha:" />
            <TextInput
              id="authorPwd"
              type="password"
              name="authorPwd"
              defaultValue=""
              required
            />
            <div className="checkboxWrapper">
              <Select
                name="authorLevel"
                options={[
                  { label: "Admin", value: "admin" },
                  { label: "User", value: "user" },
                ]}
                label={"Nível de acesso:"}
                //   selected={{ label: "User", value: "user" }}
              />
            </div>
            <Select
              name="authorStatus"
              options={[
                { label: "Ativo", value: true },
                { label: "Inativo", value: false },
              ]}
              label={"Status:"}
              // selected={{ label: "Ativo", value: true }}
            />
          </div>
          <div className="newUserButtons">
            <Button primary type="submit">
              Criar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
