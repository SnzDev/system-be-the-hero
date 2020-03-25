const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    return res.json({
        evento:'teste',
        pessoa:'tms',
    })
});

app.listen(3333);