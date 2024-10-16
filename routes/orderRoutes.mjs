

//imports

import express from 'express'

let router = express.Router()

let orders =[
    {id:1, user: 'mickey', dessert: 'delight', toppings: 'glazed'},
    {id:2, user: 'minnie', type: 'chocolate', toppings: 'vanilla'}
];

//get route

router.get('/', (req, res)=>{
    res.json(orders);
});


router.get('/:id', (req, res)=>{
    let order = orders.find(o => o.id === parseInt(req.params.id)); 
    if (!order){
        return res.status(404).json({ error: 'no order'});
    }
    res.json(order);
});

//post router

router.post('/', (req, res) => {
    let newOrder = {
        id: orders.length + 1,
        user: req.body.user,
        dessert: req.body.dessert
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
})

//update route
router.put('/:id', (req, res) => {
    let order = orders.find (o => o.id === parseInt(req.params.id));
    if(!order){
        return res.status(404).json({ error: 'no order'});
    }
    order.user = req.body.user || order. user;
    order.dessert = req.body.dessert || order.dessert;
    res.json(order);

});

//delete router

router.delete('/:id',( req, res) => {
    let orderIndex = orders.findIndex(o => o.id === parseInt(req.params.id));
    if(orderIndex === -1) {
        return res.status(404).json({ error: "no order"});
    }
    orders.splice(orderIndex, 1);
    res.json({ message: 'order deleted'});
});

export default router;

