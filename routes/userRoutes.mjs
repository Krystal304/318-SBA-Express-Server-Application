

import express from 'express';

let router = express.Router();

let users =[
    {id: 1, name: "mickey mouse"},
    {id: 2, name: "minnie mouse"}
];

// CRUD routes
router.get('/', (req, res)=>{
    res.json('users list')
});

router.get('/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'invalid'});
    }
    res.json(user);
});

// create route
router.post('/', (req, res) => {
    const createUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(createUser);
    res.status(201).json(createUser);
});

//update route
router.put('/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'no user'});
    }
    user.name = req.body.name || user.name;
    res.json(user);
});



//delete route
router.delete('/:id', (req, res) => {
    let userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ error: 'invalid user'});
    }
    users.splice(userIndex, 1);
    res.json({message: "deleted"});
});


export default router;