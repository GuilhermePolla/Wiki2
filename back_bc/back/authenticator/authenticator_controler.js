const Author = require('../user/authorModel');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function hashPwd(isPassword){
    const hash = crypto.createHash('sha256');
    hash.update(isPassword);
    return hash.digest('hex');
  }

function createToken(authorData){
    const payload = {
        authorUser: authorData.authorUser,
        authorPwd: authorData.authorPwd
    };

    return jwt.sign(payload,'secret');
}

const logIn= async (authorData) => {
    try{
        const author = await Author.findOne({authorUser: authorData.authorUser})
        if(!author){
            throw new Error('Credenciais Incorretas');
        }
        const isPassword = authorData.authorPwd;
        const password = hashPwd(isPassword);
        if(author.authorPwd !== password){
            throw new Error('Credenciais Incorretas');
        }
        author.authorToken = createToken(authorData);
        const token = author.authorToken;
        jwt.verify(token,'secret', async(err, decoded) =>{
            if(err){
                return res.status(403).send('Token inválido');
            } 
            try{
                console.log("test" , decoded);
            }
            catch (error) {
                return res.status(500).send('Erro ao autenticar autor');
               }
        });
        const savedAuthor = await author.save();
        return(author.authorToken);
    }
    catch(error){
    throw new Error(`Erro ao logar autor: ${error.message}`);
    }
}




module.exports = {logIn}