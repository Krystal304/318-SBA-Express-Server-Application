

import express from 'express';

let router = express.Router();



//render with EJS
router.get('/', (req, res)=>{
    res.render('desserts',
         {name: 'donuts',
         donutName: 'red velvet', 
         toppings: 'glazed' 
        });
});


//submission to order donut
router.post('/create', (req,res)=>{
    const { name, donutName, toppings }  = req.body;
    res.send(`donut order: ${name} with ${donutName} and ${toppings}`);
});

res.render('desserts',{
    name,
    donutName,
    toppings,
    orderMessage: `your "${name}" with "${donutName}" and "${toppings} has been placed!`
});


export default router