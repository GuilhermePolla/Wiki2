const Article = require('./aritcleModel');

const articleId = async() =>{
    try{
      const ultimoId = await Article.countDocuments({});
      return ultimoId + 1;
    }catch (error) {
      throw new Error(`Erro ao contar documentos:${error.message}`);
    }
};

const saveArticle = async (articleData, userData) => {
    const newArticle = new Article(articleData);
    newArticle.article_author_id = userData._id;
    
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
        article.save();

        return(article);
    }catch(error){
        throw new Error(`Erro ao dar like: ${error.message}`);
        
    }
}

const getAll = async() => {
  try{
    const article = await Article.find({});
    return article;
  }
  catch(error){
    throw new Error(`Erro ao buscar artigos: ${error.message}`);
  }
}

const editArticle = async(id, editedArticle) => {
  try{
    const article = await Article.findOne({_id: id});
    article.article_title = editedArticle.article_title;
    article.article_body = editedArticle.article_body;
    article.article_keywords = editedArticle.article_keywords;
    article.article_published = editedArticle.article_published;
    article.article_sugestion = editedArticle.article_sugestion;
    article.article_featured = editedArticle.article_featured;
    article.save();
    return(article);
  }
  catch(error){
    throw new Error(`Error ao editar artigo: ${error.message}`);
  }
}
const getByAuthor = async(author) => {
  try{
    authorId = author._id;
    const article = await Article.find({article_author_id: authorId});
    if(!article){
      throw new Error('Nenhum artigo encontrado')
    }
    return article;
  }
  catch(error){
    throw new Error(`Erro ao buscar artigos: ${error.message}`);
  }
}

const searchArticle = async(filter) => {
  try{
    const keywords = filter.split(',');
    const filterQuery = {
      $or: keywords.map(keyword => ({ article_keywords: keyword })),
    };
    const result = await Article.find(filterQuery)
    return result;
  }
  catch(error){
    throw new Error(`Erro ao buscar artigos: ${error.message}`);
  }
}


module.exports = {saveArticle, getArticleById, like, getAll, editArticle, getByAuthor, searchArticle};