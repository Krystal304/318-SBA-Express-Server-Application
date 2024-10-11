
//imports
import express from 'express';
import userRoutes from './routes/userRoutes.mjs';


//instance of express and invoke

const app = express ()
 

//view engine
app.set('view engine', 'ejs')

//pass middleware
app.use (logger)


//port

let PORT = 3000


//middleware

app.use(bodyParser.urlencode({ entended: true}));
app.use(bodyParser.json({ extended: true}));

app.use((req, res, next)=>{
    const time = new Date();
    console.log
})


// function logger(req, res, next){
//     console.log('log')
//     next()
// }

//routes CRUD

app.get('/', (req, res)=>{
    console.log('Home Page')
    res.render('index')
})

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

//listen 

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
