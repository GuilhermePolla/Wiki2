import "./styles.css";
import Modal from "../Modal";
import { Title } from "../Title";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import Checkbox from "../Select";
import Select from "../Select";
import Label from "../Label";
import useSession from "@/utils/useSession";

async function handleSubmit(e) {
  const session = await useSession();
  e.preventDefault();
  // console.log(e);
  console.log("Form submitted!");
}

function EditUser(props) {
  console.log(props.user);
  return (
    <Modal>
      <div className="editUserInputsWrapper">
        <Title>Editar {props.user.authorName}</Title>
        <div className="editUserInputs">
          <form onSubmit={handleSubmit} style={{ height: "100%" }}>
            <Label htmlFor="authorName" text="Nome:" />
            <TextInput
              id="authorName"
              name="authorName"
              defaultValue={props.user.authorName}
            />
            <Label htmlFor="authorUser" text="Usuário:" />
            <TextInput
              id="authorUser"
              name="authorUser"
              defaultValue={props.user.authorUser}
            />
            <Label htmlFor="authorEmail" text="Email:" />
            <TextInput
              id="authorEmail"
              type="email"
              name="authorEmail"
              defaultValue={props.user.authorEmail}
            />
            <div className="checkboxWrapper">
              <Select
                options={[
                  { label: "Admin", value: "admin" },
                  { label: "User", value: "user" },
                ]}
                label={"Nível de acesso:"}
                selected={props.user.authorLevel}
              />
            </div>
            <Select
              options={[
                { label: "Ativo", value: true },
                { label: "Inativo", value: false },
              ]}
              label={"Status:"}
              selected={props.user.authorStatus}
            />
          </form>
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
    </Modal>
  );
}

export default EditUser;
