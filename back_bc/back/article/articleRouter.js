const express = require ('express');
const articleController = require ('./articleController');
const authentication = require('../authenticator/middlewere');


const articleRouter = express.Router();




articleRouter.post('/save',authentication, async (req, res) => {
    try {
      const newArticle = await articleController.saveArticle(req.body, req.author);
      res.json({ mensagem: 'Artigo criado com sucesso', Article: newArticle });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao criar o artigo', detalhes: error.message });
    }
});

articleRouter.get('/get-by-id/:id', async (req,res) =>{
    try{
        const articleId = req.params.id;
        const article = await articleController.getArticleById(articleId);

        if (!article) {
            res.status(404).json({ erro: `Artigo id ${articleId} não encontrado` });
            return;
          }
        
        res.json({artigo: article});
    }   catch (error){
        res.status(500).json({ erro: 'Erro ao buscar artigo', detalhes: error});
    }
});

articleRouter.post('/like/:id', async (req, res) => {
    try{
        const articleId = req.params.id;
        const article = await articleController.like(articleId);
    
    if (!article) {
        res.status(404).json({ erro: `Artigo id ${articleId} não encontrado` });
        return;
      }
    res.json({Mensagem: `Artigo com id ${articleId} likezado com sucesso`});
    }catch (error){
        res.status(500).json({ erro: 'Erro ao buscar artigo', detalhes: error});
    }
    
});

articleRouter.get('/get-all', async(req, res) =>{
  try{
    const article = await articleController.getAll();
    if(!article){
      res.status(404).json({ error: `Não há artigos a mostrar `});
      return;
    }
    res.json({artigos: article});
  }
  catch(error){
    res.status(500).json({ erro: 'Erro ao buscar artigo', detalhes: error});
  }  
});

articleRouter.post('/edit/:id', async(req, res) =>{
  try{
    const id = req.params.id;
    const article = await articleController.editArticle(id, req.body);
    if (!article) {
      res.status(404).json({ erro: `Artigo id ${articleId} não encontrado` });
      return;
    }
    res.json({message: 'Sucesso?', artigo: article});
  }
  catch(error){
    res.status(500).json({ erro: 'Erro ao modificar artigo', detalhes: error});
  }
});

articleRouter.get('/get-by-author/',authentication, async (req,res) =>{
  try{
      const article = await articleController.getByAuthor(req.author);

      if (!article) {
          res.status(404).json({ erro: `Usuario não possui artigos` });
          return;
        }
      
      res.json({artigo: article});
  }   catch (error){
      res.status(500).json({ erro: 'Erro ao buscar artigo', detalhes: error});
  }
});

articleRouter.get('/search/:filter', async(req,res) =>{
  try{
    const filter = req.params.filter;
    const result = await articleController.searchArticle(filter);
    if (!result) {
      res.status(404).json({ erro: `Nenhum artigo encontrado` });
      return;
    }
    res.json({mensagem: "Sucesso", result: result});
    
  }
  catch (error){
    res.status(500).json({ erro: 'Erro ao buscar artigo', detalhes: error});
}
});

module.exports = articleRouter;