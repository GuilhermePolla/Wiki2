import "./styles.css";
import Select from "../Select";
import { Title } from "../Title";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import Label from "../Label";
import useSession from "@/utils/useSession";
import axios from "axios";

async function handleSubmit(e) {
  e.preventDefault();
  try {
    const session = await useSession();
    const keywords = e.target.article_keywords.value.split(",");
    const res = await axios.post(
      "http://localhost:3001/article/save",
      {
        article_title: e.target.article_title.value,
        article_body: e.target.article_body.value,
        article_keywords: keywords,
        article_published: e.target.article_published.value,
        article_featured: e.target.article_featured.value,
      },
      {
        headers: {
          Authorization: `${session.authorToken}`,
        },
      }
    );
    if (res.status === 200) {
      alert("Artigo criado com sucesso");
    }
  } catch (err) {
    alert("Erro ao criar usuário");
    console.log(err);
  }
}

function NewArticle(props) {
  return (
    <div className="outerWrapper">
      <form onSubmit={handleSubmit} style={{ width: "100%", height: "100%" }}>
        <div className="newArticleInputsWrapper">
          <Title>Novo Artigo</Title>
          <div className="newArticleInputs">
            <Label htmlFor="article_title" text="Titulo" />
            <TextInput
              type="text"
              id="article_title"
              name="article_title"
              defaultValue={""}
              required
            />
            <Label htmlFor="article_body" text="Texto: " />
            <textarea
              id="article_body"
              name="article_body"
              required
              defaultValue={""}
              placeholder="Digite..."
              style={{
                width: "100%",
                borderRadius: "2px",
                height: "fit-content",
                minHeight: "100px",
              }}
            />

            <Label htmlFor="article_keywords" text="Keywords: " />
            <p style={{ color: "white", fontSize: "12px" }}>
              Separadas apenas por uma vírgula.
            </p>
            <TextInput
              type="text"
              id="article_keywords"
              name="article_keywords"
              defaultValue={""}
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
              />
            </div>
          </div>
          <div className="newArticleButtons">
            <Button primary type="submit">
              Criar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewArticle;
