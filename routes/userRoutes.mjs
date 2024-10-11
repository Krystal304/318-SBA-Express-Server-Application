

import express from 'express';

let router = express.Router;


app.get('/users/:id/', (req, res)=>{
    const id = req.params.id;
    res.json ({
        id: id,
        name: 'donald duck'

    })
})

app.post('/users', (req, res)=>{
    res.json({id:1, name: 'Krissy Ball', sport: 'swim', age: 15});
});

app.put('/users', (req, res)=>{
    res.json({id:1, name: 'Krissy Ball', sport: 'tennis', age: 16});
})  

app.delete('/users', (req, res)=>{
    res.json();
})