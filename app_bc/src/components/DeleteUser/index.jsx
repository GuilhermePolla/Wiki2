import Modal from "../Modal";
import "./styles.css";
import { Title } from "../Title";
import { Button } from "../Button";

function handleDelete() {
  console.log("Usuário deletado");
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
          <Button style={{ width: "100%" }} primary onClick={handleDelete}>
            Sim
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteUser;
