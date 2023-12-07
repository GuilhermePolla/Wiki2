import "./styles.css";
import Modal from "@/components/Modal";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import axios from "axios";

async function handleDelete(article, setDeleteModal) {
  try {
    const res = await axios.post(
      `http://localhost:3001/article/edit/${article._id}`,
      {
        article_title: article.article_title,
        article_body: article.article_body,
        article_keywords: article.article_keywords,
        article_published: false,
        article_featured: article.article_featured,
      }
    );
    if (res.status === 200) {
      alert("Artigo excluido com sucesso");
      setDeleteModal(null);
    }
  } catch (err) {
    alert("Erro ao excluir artigo");
    console.log(err);
  }
}

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
