const Article = require('./aritcleModel');

const articleId = async() =>{
    try{
      const ultimoId = await Article.countDocuments({});
      return ultimoId + 1;
    }catch (error) {
      throw new Error(`Erro ao contar documentos:${error.message}`);
    }
};

const saveArticle = async (articleData) => {
    const newArticle = new Article(articleData);
    
    try {
      newArticleId = await articleId();
      newArticle._id = newArticleId;
      const savedArticle = await newArticle.save();
      return savedArticle;
    } catch (error) {
      throw new Error(`Erro ao salvar artigo:${error.message}`);
    }
};

const getArticleById = async (id) => {
    try {
      const article = await Article.findOne({ _id: id });
      return article;
    } catch (error) {
      throw new Error(`Erro ao buscar artigo pelo id: ${error.message}`);
    }
  };

const like = async(id) => {
    try {
        const article = await Article.findOne({_id: id});
        article.article_liked_count++;
        article.article_body = "test";
        console.log(article);
        article.save();

        return(article);
    }catch(error){
        throw new Error(`Erro ao dar like: ${error.message}`)
        
    }
}

module.exports = {saveArticle, getArticleById, like};