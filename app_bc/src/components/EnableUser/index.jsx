import Modal from "../Modal";
import "./styles.css";
import { Title } from "../Title";
import { Button } from "../Button";
import axios from "axios";

async function handleEnable(user, setEnableModal) {
  try {
    const res = await axios.put(
      `http://localhost:3001/author/enable-author/${user.authorUser}`
    );
    if (res.status === 200) {
      alert("Usuário ativado com sucesso");
      setEnableModal(null);
    }
  } catch (err) {
    alert("Erro ao ativar usuário");
    console.log(err);
  }
}

function EnableUser(props) {
  return (
    <Modal>
      <div className="enableUserWrapper">
        <Title>Ativar {props.user.authorName}</Title>
        <div className="enableUserButtons">
          <Button
            style={{ width: "100%" }}
            onClick={() => props.setEnableModal(null)}
          >
            Não
          </Button>
          <Button
            style={{ width: "100%" }}
            primary
            onClick={() => handleEnable(props.user, props.setEnableModal)}
          >
            Sim
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default EnableUser;
