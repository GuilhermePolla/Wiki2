const Author = require("./authorModel");
const crypto = require("crypto");
const auth = require("../authenticator/authenticator_controler");

function hashPwd(authorData) {
  const hash = crypto.createHash("sha256");
  hash.update(authorData.authorPwd);
  return hash.digest("hex");
}

const authorId = async () => {
  try {
    const ultimoId = await Author.countDocuments({});
    return ultimoId + 1;
  } catch (error) {
    throw new Error(`Erro ao contar documentos:${error.message}`);
  }
};

const saveAuthor = async (authorData) => {
  const newAuthor = new Author(authorData);
  newAuthor.authorPwd = hashPwd(newAuthor);

  try {
    const newAuthorId = await authorId();
    newAuthor._id = newAuthorId;
    const savedAuthor = await newAuthor.save();
    return savedAuthor;
  } catch (error) {
    throw new Error(`Erro ao salvar autor:${error.message}`);
  }
};

const getAuthorByUser = async (authorUser) => {
  try {
    const author = await Author.findOne({ authorUser: authorUser });
    return author;
  } catch (error) {
    throw new Error(
      `Erro ao buscar autor pelo nome do autor: ${error.message}`
    );
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
  try {
    const author = await Author.findOne({ authorUser: authorUser });
    author.authorStatus = false;
    author.save();
    return author;
  } catch (error) {
    throw new Error(`Erro ao desabilitar autor: ${error.message}`);
  }
};

const enableAuthor = async (authorUser) => {
  try {
    const author = await Author.findOne({ authorUser: authorUser });
    author.authorStatus = true;
    author.save();
    return author;
  } catch (error) {
    throw new Error(`Erro ao habilitar autor: ${error.message}`);
  }
};

const editAuthor = async (reqAuthor, editedAuthor) => {
  try {
    console.log("editedAuthor", editedAuthor);
    const authorUser = editedAuthor.authorUser;
    const author = await Author.findOne({ authorUser: authorUser });
    author.authorName = editedAuthor.authorName;
    author.authorEmail = editedAuthor.authorEmail;
    author.authorUser = editedAuthor.authorUser;
    author.authorLevel = editedAuthor.authorLevel;
    author.authorPwd = hashPwd(editedAuthor);
    author.save();
    return author;
  } catch (error) {
    throw new Error(`Erro ao Editar Usuario: ${error.message}`);
  }
};

const getById = async (id) => {
  try {
    const author = await Author.findOne({ _id: id });
    const payload = {
      authorName: author.authorName,
      authorUser: author.authorEmail,
    };
    return payload;
  } catch (error) {
    throw new Error(`Erro ao buscar pelo autor: ${error.message}`);
  }
};

module.exports = {
  saveAuthor,
  getAuthorByUser,
  getAllAuthors,
  deleteAuthor,
  enableAuthor,
  editAuthor,
  getById,
};
