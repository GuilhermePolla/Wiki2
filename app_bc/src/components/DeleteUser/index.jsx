import Modal from "../Modal";
import "./styles.css";
import { Title } from "../Title";
import { Button } from "../Button";
import axios from "axios";

async function handleDelete(user, setDeleteModal) {
  try {
    const res = await axios.delete(
      `http://localhost:3001/author/delete-author/${user.authorUser}`
    );
    if (res.status === 200) {
      alert("Usuário deletado com sucesso");
      setDeleteModal(null);
    }
  } catch (err) {
    alert("Erro ao deletar usuário");
    console.log(err);
  }
}

function DeleteUser(props) {
  return (
    <Modal>
      <div className="deleteUserWrapper">
        <Title>Remover {props.user.authorName}</Title>
        <div className="deleteUserButtons">
          <Button
            style={{ width: "100%" }}
            onClick={() => props.setDeleteModal(null)}
          >
            Não
          </Button>
          <Button
            style={{ width: "100%" }}
            primary
            onClick={() => handleDelete(props.user, props.setDeleteModal)}
          >
            Sim
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteUser;
