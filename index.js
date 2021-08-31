require('dotenv').config();

const express = require('express');
const cors = require('cors');


const {dbConnection} = require('./database/config');
//crear servidor de express
const app = express();
//Configurando Cors
app.use(cors());
//bd
dbConnection();
 

app.get('/',(req,res)=>{
    res.json(
        {
            ok: true,
            msg : 'Hola mundo'
        }
    );
});

app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en puerto '+process.env.PORT);
});