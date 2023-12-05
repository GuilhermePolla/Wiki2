import "./styles.css";
import Modal from "../Modal";

function Edituser(props) {
  return (
    <Modal>
      EditUser<button onClick={() => props.setEditModal(false)}>Close</button>
    </Modal>
  );
}

export default Edituser;
