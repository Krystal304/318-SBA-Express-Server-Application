

import express from 'express';

let router = express.Router();


router.get('/', (req, res)=>{
    res.send('list')
})

router.post('/', (req, res)=>{
    res.send('create')
})

router.get('/:id/', (req, res)=>{
res.send(`get user with id ${req.params.id}`)
 });
    
 
router.put('/:id/', (req, res)=>{
res.send(`update user with id ${req.params.id}`)
 });


router.delete('/:id/', (req, res)=>{
res.send(`get user with id ${req.params.id}`)
});



export default router;