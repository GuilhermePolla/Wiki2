const express = require ('express');
const authControler = require ('./authenticator_controler');

const authRouter = express.Router();

authRouter.get('/log-in', async (req, res) => {
    try {
      const newToken = await authControler.logIn(req.body);
      res.json({ mensagem: 'Log-in efetuado com sucesso', token: newToken });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao logar', detalhes: error.message });
    }
  });

module.exports = authRouter;
