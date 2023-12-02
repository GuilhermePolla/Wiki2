const express = require ('express');
const articleController = require ('./articleController');

const articleRouter = express.Router();




articleRouter.post('/save', async (req, res) => {
    try {
      const newArticle = await articleController.saveArticle(req.body);
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
module.exports = articleRouter;