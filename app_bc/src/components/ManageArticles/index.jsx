import axios from "axios";
import "./styles.css";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import EditArticle from "../EditArticle";
import DeleteArticle from "../DeleteArticle";

async function getArticles(setArticles) {
  try {
    const articlesRes = await axios.get(
      "http://localhost:3001/article/get-all"
    );
    const authorsRes = await axios.get(
      "http://localhost:3001/author/get-all-authors"
    );
    const articles = articlesRes.data.artigos.map((article) => {
      const author = authorsRes.data.autores.find(
        (author) => author._id === article.article_author_id
      );
      return {
        ...article,
        authorUser: author.authorUser,
      };
    });
    setArticles(articles);
  } catch (err) {
    alert(err);
  }
}

function ManageArticles() {
  const [articles, setArticles] = useState([]);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  useEffect(() => {
    getArticles(setArticles);
  }, [editModal, deleteModal]);

  return (
    <div className="manageArticlesWrapper">
      <Title>Editar Artigos</Title>
      <div className="articlesListWrapper">
        {articles.length !== 0 &&
          articles.map((article) => {
            return (
              <div className="articleWrapper" key={article._id}>
                <div className="textWrapper">
                  <p>
                    <span className="spanText">Titulo:</span>{" "}
                    {article.article_title}
                  </p>
                  <p>
                    <span className="spanText">Usuário:</span>{" "}
                    {article.authorUser}
                  </p>
                  <p>
                    <span className="spanText">Publicado:</span>{" "}
                    {article.article_published ? "Sim" : "Não"}
                  </p>
                </div>
                <div className="buttonsWrapper">
                  <Button primary onClick={() => setEditModal(article._id)}>
                    Editar
                  </Button>
                  <Button onClick={() => setDeleteModal(article._id)}>
                    Excluir
                  </Button>
                </div>
                {editModal === article._id && (
                  <EditArticle setEditModal={setEditModal} article={article} />
                )}
                {deleteModal === article._id && (
                  <DeleteArticle
                    setDeleteModal={setDeleteModal}
                    article={article}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ManageArticles;
