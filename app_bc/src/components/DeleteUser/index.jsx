import Modal from "../Modal";
import "./styles.css";

function DeleteUser(props) {
  return (
    <Modal>
      DeleteUser
      <button onClick={() => props.setDeleteModal(false)}>Close</button>
    </Modal>
  );
}

export default DeleteUser;
