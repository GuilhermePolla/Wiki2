import { Button } from "../Button";
import Label from "../Label";
import Select from "../Select";
import { Title } from "../Title";
import "./styles.css";
import Modal from "@/components/Modal";
import { TextInput } from "../TextInput";
import axios from "axios";

async function handleSubmit(e, article, setEditModal) {
  e.preventDefault();
  try {
    const keywords = e.target.article_keywords.value.split(",");
    const res = await axios.post(
      `http://localhost:3001/article/edit/${article._id}`,
      {
        article_title: e.target.article_title.value,
        article_body: e.target.article_body.value,
        article_keywords: keywords,
        article_published: e.target.article_published.value,
        article_featured: e.target.article_featured.value,
      }
    );
    if (res.status === 200) {
      alert("Artigo editado com sucesso");
      setEditModal(null);
    }
  } catch (err) {
    alert("Erro ao editar artigo");
    console.log(err);
  }
}

function EditArticle(props) {
  return (
    <Modal>
      <form
        onSubmit={(e) => handleSubmit(e, props.article, props.setEditModal)}
        style={{ height: "100%" }}
      >
        <div className="editArticleWrapper">
          <Title>Editar {props.article.article_title}</Title>
          <div className="editArticleInputs">
            <Label htmlFor="article_title" text="Titulo" />
            <TextInput
              type="text"
              id="article_title"
              name="article_title"
              defaultValue={props.article.article_title}
              required
            />
            <Label htmlFor="article_body" text="Texto: " />
            <textarea
              id="article_body"
              name="article_body"
              required
              defaultValue={props.article.article_body}
              cols={50}
              rows={10}
              style={{ width: "fit-content", borderRadius: "2px" }}
            />

            <Label htmlFor="article_keywords" text="Keywords: " />
            <TextInput
              type="text"
              id="article_keywords"
              name="article_keywords"
              defaultValue={props.article.article_keywords}
              required
            />
            <div className="checkboxWrapper">
              <Select
                name="article_published"
                options={[
                  { label: "Sim", value: true },
                  { label: "Não", value: false },
                ]}
                label={"Publicado:"}
                selected={props.article.article_published}
              />
            </div>
            <div className="checkboxWrapper">
              <Select
                name="article_suggestion"
                options={[
                  { label: "Sim", value: true },
                  { label: "Não", value: false },
                ]}
                label={"Sugestão:"}
                selected={props.article.article_suggestion}
              />
            </div>
            <div className="checkboxWrapper">
              <Select
                name="article_featured"
                options={[
                  { label: "Sim", value: true },
                  { label: "Não", value: false },
                ]}
                label={"Featured:"}
                selected={props.article.article_featured}
              />
            </div>
          </div>
          <div className="editUserButtons">
            <Button type="button" onClick={() => props.setEditModal(null)}>
              Fechar
            </Button>
            <Button type="submit" primary>
              Salvar
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default EditArticle;
