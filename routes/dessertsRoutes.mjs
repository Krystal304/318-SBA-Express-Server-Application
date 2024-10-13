

import express from 'express';

let router = express.Router();

let desserts =[
    {id:1, name: 'delight', type: 'red velvet', toppings: 'glazed'},
    {id:2, name: 'sparkle', type: 'chocolate', toppings: 'vanilla'}
];



router.get('/', (req, res)=>{
    const { name } = req.query;
    if (name) {
        const filteredDesserts = desserts.filter(dessert => dessert.name.toLowerCase().includes(name.toLowerCase()));
        return res.jsob(filteredDesserts);
    }
    res.json(desserts);
});


// get route 
router.get('/:id', (req, res)=>{
    const dessert = desserts.find(d => d.id === parseInt(req.params.id));
    if (!dessert){
        return res.status(404).json({ error: ' no dessert'});
    }
    res.json(dessert);
});
       
// create route

router.post('/', (req, res)=>{
    if( req.body.name && req.body.type && req.body.toppings){
        const dessertOrder ={
        id: desserts.length + 1,
        name: req.body.name,
        type: req.body.type,
        toppings: req.body.topping
        };
    desserts.push(dessertOrder);
    res.render('desserts', dessertOrder);
    } else{
        res.send(`incorrect info`)
    }

});

//update route
router.put('/:id', (req, res)=>{
    const dessert = desserts.find(d => d.id === parseInt(req.params.id));
    if(!dessert){
        return res.status(404).json({ error: ' no dessert'});
    }
    dessert.name = req.body.name || dessert.name;
    dessert.type = req.body.type || dessert.type;
    dessert.toppings = req.body.toppings || dessert.toppings;
    res.json(dessert);
});


// delete route 

router.delete('/:id', (req, res)=>{
    const dessertIndex = desserts.findIndex(d => d.id === parseInt(req.params.id));
    if(dessertIndex === -1){
        return res.status(404).json({ error: 'no dessert'});
    }
    desserts.splice(dessertIndex, 1);
    res,json({ message: 'dessert deleted'})
});




export default router;