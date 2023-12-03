const jwt = require('jsonwebtoken');
const Author = require('../user/authorModel');


const authenticateToken = (req, res, next) =>{
    const token = req.header('Authorization');
    if (!token){
        return res.status(401).send('Acesso negado');
    } 

    jwt.verify(token,'secret', async(err, decoded) =>{
        if(err){
            return res.status(403).send('Token inválido');
        } 
        
        try{
            console.log("test" , decoded)
            const author = await Author.findOne({ authorUser: decoded.authorUser });
        if (!author){
            return res.status(404).send('Autor não encontrado');
        } 

        req.author = author;
        next();
        }
        catch (error) {
         return res.status(500).send('Erro ao autenticar autor');
        }

    });
}

module.exports = authenticateToken;

