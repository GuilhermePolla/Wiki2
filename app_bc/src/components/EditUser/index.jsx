import "./styles.css";
import Modal from "../Modal";
import { Title } from "../Title";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import Checkbox from "../Select";
import Select from "../Select";
import Label from "../Label";
import useSession from "@/utils/useSession";
import axios from "axios";

async function handleSubmit(e, user, setEditModal) {
  e.preventDefault();
  try {
    const session = await useSession();
    console.log({
      authorName: e.target.authorName.value,
      authorUser: user.authorUser,
      authorPwd: e.target.authorPwd.value,
      authorEmail: e.target.authorEmail.value,
      authorLevel: e.target.authorLevel.value,
    });
    const res = await axios.post(
      "http://localhost:3001/author/edit-author",
      {
        authorName: e.target.authorName.value,
        authorUser: user.authorUser,
        authorPwd: e.target.authorPwd.value,
        authorEmail: e.target.authorEmail.value,
        authorLevel: e.target.authorLevel.value,
      },
      {
        headers: {
          Authorization: `${session.authorToken}`,
        },
      }
    );
    if (res.status === 200) {
      alert("Usuário editado com sucesso");
      setEditModal(null);
    }
  } catch (err) {
    alert("Erro ao editar usuário");
    console.log(err);
  }
}

function EditUser(props) {
  console.log(props.user);
  return (
    <Modal>
      <form
        onSubmit={(e) => handleSubmit(e, props.user, props.setEditModal)}
        style={{ height: "100%" }}
      >
        <div className="editUserInputsWrapper">
          <Title>Editar {props.user.authorName}</Title>
          <div className="editUserInputs">
            <Label htmlFor="authorName" text="Nome:" />
            <TextInput
              id="authorName"
              name="authorName"
              defaultValue={props.user.authorName}
              required
            />

            <Label htmlFor="authorEmail" text="Email:" />
            <TextInput
              id="authorEmail"
              type="email"
              name="authorEmail"
              defaultValue={props.user.authorEmail}
              required
            />
            <Label htmlFor="authorPwd" text="Senha:" />
            <TextInput
              type="password"
              id="authorPwd"
              name="authorPwd"
              defaultValue={""}
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
                selected={props.user.authorLevel}
              />
            </div>
          </div>
          <div className="editUserButtons">
            <Button type="button" onClick={() => props.setEditModal(null)}>
              Fechar
            </Button>
            <Button primary type="submit">
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default EditUser;
