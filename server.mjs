
//imports
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.mjs';


//instance of express and invoke

const app = express ()
 

//view engine
app.set('view engine', 'ejs')

//pass middleware
// app.use (logger)


//port

let PORT = 3000


//middleware

app.use(bodyParser.urlencoded({ entended: true}));
app.use(bodyParser.json({ extended: true}));

app.use((req, res, next)=>{
    const time = new Date();
    console.log
})


// function logger(req, res, next){
//     console.log('log')
//     next()
// }

app.use('/users', userRoutes)

//View Engine

//routes CRUD

//listen 

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
