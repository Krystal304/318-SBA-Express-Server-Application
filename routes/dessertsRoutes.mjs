

import express from 'express';

let router = express.Router();


router.get('/', (req, res)=>{
    res.render('desserts', {name: 'donuts', cakeName: 'red'})
})





export default router