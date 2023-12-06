import "./styles.css";
import Modal from "@/components/Modal";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

async function handleDelete() {}

function DeleteArticle(props) {
  return (
    <Modal>
      <div className="deleteArticleWrapper">
        <Title>Remover {props.article.article_title}</Title>
        <div className="deleteArticleButtons">
          <Button
            style={{ width: "100%" }}
            onClick={() => props.setDeleteModal(null)}
          >
            Não
          </Button>
          <Button
            style={{ width: "100%" }}
            primary
            onClick={() => handleDelete(props.article, props.setDeleteModal)}
          >
            Sim
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteArticle;
