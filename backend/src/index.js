const express = require('express');
const routes = require('./routes')
const app = express();



app.use(express.json());

app.get('/', (req,res)=>{
    return res.json({
        evento:'teste',
        pessoa:'tms',
    })
});

app.listen(3333);