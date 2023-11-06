const express = require ('express');
const authorControler = require ('./authorController');

const authorRouter = express.Router();

authorRouter.post('/save', async (req, res) => {
    try {
      const newAuthor = await authorControler.saveAuthor(req.body);
      res.json({ mensagem: 'Autor criado com sucesso', Author: newAuthor });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao criar o autor', detalhes: error.message });
    }
  });

  authorRouter.get('/get-by-user/:authorUser', async (req, res) => {
    try {
      const authorUser = req.params.authorUser;
      const author = await authorControler.getAuthorByUser(authorUser);
  
      if (!author) {
        res.status(404).json({ erro: `Autor não encontrado: ${authorUser}` });
        return;
      }
  
      res.json({ autor: author });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar autor', detalhes: error.message });
    }
  });
  
  authorRouter.get('/get-all-authors', async (req, res) => {
    try {
      const authors = await authorControler.getAllAuthors();
  
      if (!authors || authors.length === 0) {
        res.status(404).json({ erro: 'Nenhum autor encontrado' });
        return;
      }
  
      res.json({ autores: authors });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar autores', detalhes: error.message });
    }
  });

  authorRouter.delete('/delete-author/:authorUser', async (req, res) =>{
    try{
      const authorUser = req.params.authorUser
      const author = await authorControler.deleteAuthor(authorUser);
      if (!author) {
        res.status(404).json({ erro: `Autor não encontrado: ${authorUser}` });
        return;
      }
      res.json(`Author ${req.params.authorUser} foi desabilitado`);
    }
      catch(error){ 
        res.status(500).json({erro: 'Erro ao desablitar autor', detalhes: error.message });
      }
  });

  authorRouter.put('/enable-author/:authorUser', async (req, res) =>{
    try{
      const authorUser = req.params.authorUser;
      const author = await authorControler.enableAuthor(authorUser);
      if (!author) {
        res.status(404).json({ erro: `Autor não encontrado: ${authorUser}` });
        return;
      }
      res.json(`Author ${req.params.authorUser} foi habilitado`);
    }
      catch(error){ 
        res.status(500).json({erro: 'Erro ao habilitar autor', detalhes: error.message });
      }
  });

  authorRouter.post('/edit-author/:authorUser', async (req, res) =>{
    try{
      const authorUser = req.params.authorUser;
      const editedAuthor = await authorControler.editAuthor(authorUser, req.body);
      if(!editedAuthor){
        res.status(404).json({ erro: `Autor não encontrado: ${authorUser}` });
        return;
    }
    res.json({
      Mensagem: `O Autor ${authorUser} foi editado com sucesso!`,
      Author: editedAuthor
    });
    }
    catch(error){
      res.status(500).json({erro: 'Erro ao editar autorteste', detalhes: error.message });
    }
  })
  
  
  module.exports = authorRouter;
