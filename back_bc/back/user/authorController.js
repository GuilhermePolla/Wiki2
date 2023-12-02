const Author = require('./authorModel');
const crypto = require('crypto');

function hashPwd(authorData){
  const hash = crypto.createHash('sha256');
  hash.update(authorData.authorPwd);
  return hash.digest('hex');
}

const authorId = async() =>{
  try{
    const ultimoId = await Author.countDocuments({});
    return ultimoId + 1;
  }catch (error) {
    throw new Error(`Erro ao contar documentos:${error.message}`);
  }
};

const saveAuthor = async (authorData) => {
    const newAuthor = new Author(authorData);
    newAuthor.authorPwd = hashPwd(newAuthor);
    
    try {
      newAuthorId = await authorId();
      newAuthor._id = newAuthorId;
      const savedAuthor = await newAuthor.save();
      return savedAuthor;
    } catch (error) {
      throw new Error(`Erro ao salvar autor:${error.message}`);
    }
  };


  const getAuthorByUser = async (authorUser) => {
    try {
      const author = await Author.findOne({ authorName: authorUser });
      return author;
    } catch (error) {
      throw new Error(`Erro ao buscar autor pelo nome do autor: ${error.message}`);
    }
  };

  const getAllAuthors = async () => {
    try {
      const authors = await Author.find();
      return authors;
    } catch (error) {
      throw new Error(`Erro ao buscar todos os autores: ${error.message}`);
    }
  };

  const deleteAuthor = async (authorUser) => {
    try{
      const author = await Author.findOne({authorName: authorUser});
      author.authorStatus = false;
      author.save();
      return(author);
    } catch(error){
      throw new Error(`Erro ao desabilitar autor: ${error.message}`);
    }
  };

  const enableAuthor = async (authorUser) => {
    try{
      const author = await Author.findOne({authorName: authorUser});
      author.authorStatus = true;
      author.save();
      return(author);
    } catch(error){
      throw new Error(`Erro ao habilitar autor: ${error.message}`);
    }
  };

  const editAuthor = async(authorUser, editedAuthor) => {
    try{
      const author = await Author.findOne({authorName: authorUser});
      author.authorName = editedAuthor.authorName;
      author.authorEmail = editedAuthor.authorEmail;
      author.authorUser = editedAuthor.authorUser;
      author.authorPwd = hashPwd(editedAuthor);
      author.save;
      return(author);
    }catch(error){
      throw new Error(`Erro ao Editar Usuario: ${error.message}`)
    }


  }

module.exports = {saveAuthor, getAuthorByUser, getAllAuthors, deleteAuthor, enableAuthor, editAuthor};
