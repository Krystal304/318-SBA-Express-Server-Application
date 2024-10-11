

import express from 'express';

let router = express.Router;


router.get('/users/:id/', (req, res)=>{
    const id = req.params.id;
    res.json ({
        id: id,
        name: 'donald duck'

    });
});

router.post('/', (req, res)=>{
    res.json({
        id:1, 
        name: 'Krissy Ball', 
        sport: 'swim', 
        age: 15});
});

router.put('/', (req, res)=>{
    res.json({
        id:1, 
        name: 'Krissy Ball', 
        sport: 'tennis', 
        age: 16});
})  

router.delete('/user/:id', (req, res)=>{
    const id = req.params.id;
        res.json({
        message: `user id ${id} delete`
        });
})

export default router;