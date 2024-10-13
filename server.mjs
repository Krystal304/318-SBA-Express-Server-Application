
//imports
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.mjs';
import dessertsRoutes from './routes/dessertsRoutes.mjs'
import orderRoutes from './routes/orderRoutes.mjs';


//instance of express and invoke

const app = express ()
 

//view engine 
app.set('view engine', 'ejs')
app.set('views', 'views')  

// middleware parsing 

app.use(bodyParser.urlencoded({ entended: true}));
app.use(bodyParser.json({ extended: true}));


  //middlware
function logger(req, res, next){
    console.log(req.url)
    next()
}
// pass middleware
app.use(logger)


//port

let PORT = 3000




// custom middleware 
app.use((req, res, next)=>{
    const time = new Date();
    console.log(`order received:`,time)
    next();
});


  // user and desserts routes 
app.use('/users', userRoutes)
app.use('/desserts', dessertsRoutes)
app.use('/orders', orderRoutes);

//
app.use((err, req, res, next)=>{
    console.errot(err);
    res.status(500).send('system error');
});
//listen 
//
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
