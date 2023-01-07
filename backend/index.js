const express = require('express');
const { db } = require('./firebase.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

app.get('/', async(req,res)=>{
    res.status(200).json({"msg":"veja o caminho /restaurants, por enquanto só aceitamos metodos GET"})
});

app.get('/restaurants', async(req,res)=>{
    const restaurantRef = db.collection('restaurantsData');
    const restaurants = [];
    const restaurantDoc = await restaurantRef.get();
    
    restaurantDoc.forEach(doc => restaurants.push(doc.data()));
    // if (!doc.exists) {
    //     return res.sendStatus(400)
    // }

    return res.status(200).json(restaurants);
});

const port = process.env.PORT;
app.listen(port || 3001,()=>{
    console.log(`ouvindo a porta ${port}`);
});

module.exports = app;
