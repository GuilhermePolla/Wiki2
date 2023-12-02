const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();
const authorRouter = require ('./user/authorRoutes');
const articleRouter = require ('./article/articleRouter');
const PORT = 3000;
app.use(bodyParser.json());
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/WIKI2', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('MongoDB conectado');
});

mongoose.connection.on('error', (err) => {
    console.error('Erro na conexão com o MongoDB', err);
});

app.use(express.json());

app.use('/author', authorRouter);
app.use('/article', articleRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });


