const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({"chave":"SouFoda"});
});

const port = process.env.PORT;
app.listen(port || 3001,()=>{
    console.log(`ouvindo a porta ${port}`);
});

module.exports = app;