import "./styles.css";
import Select from "../Select";
import { Title } from "../Title";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import Label from "../Label";

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e);
  console.log("Form submitted!");
}

function NewUser() {
  return (
    <div className="editUserInputsWrapper">
      <Title>Novo Usuário</Title>
      <div className="editUserInputs">
        <form onSubmit={handleSubmit}>
          <Label htmlFor="authorName" text="Nome:" />
          <TextInput id="authorName" name="authorName" defaultValue="" />
          <Label htmlFor="authorUser" text="Usuário:" />
          <TextInput id="authorUser" name="authorUser" defaultValue="" />
          <Label htmlFor="authorEmail" text="Email:" />
          <TextInput
            id="authorEmail"
            type="email"
            name="authorEmail"
            defaultValue=""
          />
          <Label htmlFor="authorPwd" text="Senha:" />
          <TextInput
            id="authorPwd"
            type="password"
            name="authorPwd"
            defaultValue=""
          />
          <div className="checkboxWrapper">
            <Select
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
              label={"Nível de acesso:"}
              //   selected={{ label: "User", value: "user" }}
            />
          </div>
          <Select
            options={[
              { label: "Ativo", value: true },
              { label: "Inativo", value: false },
            ]}
            label={"Status:"}
            // selected={{ label: "Ativo", value: true }}
          />
        </form>
      </div>
      <div className="editUserButtons">
        <Button primary type="submit">
          Enviar
        </Button>
      </div>
    </div>
  );
}

export default NewUser;
