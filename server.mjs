
//imports
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.mjs';
import dessertsRoutes from './routes/dessertsRoutes.mjs'
import orderRoutes from './routes/orderRoutes.mjs';


//instance of express and invoke

const app = express ();
 
//port

let PORT = 3000;

//view engine
app.set('views', './views');
app.set('view engine', 'ejs');


// middleware parsing 

app.use(bodyParser.urlencoded({ entended: true}));
app.use(bodyParser.json({ extended: true}));



//static files
app.use(express.static('./styles'));


//route 

app.get('/', (req, res)=>{
    res.render('index',{
        name: null,
        dessertName: null,
        donutName: null,
        toppings: null
    });
});

app.post ('/desserts/create', (req, res)=>{
    let { dessertName, donutName , toppings} = req.body;
    
    if(!dessertName || !donutName || !toppings) {
        console.log('error');
        return res.status(404).send ('error');
    }



    res.render('index',{
        name: dessertName,
        dessertName: dessertName,
        donutName: donutName,
        toppings: toppings
    });
});

  // user and desserts routes 
  app.use('/users', userRoutes);
  app.use('/desserts', dessertsRoutes);
  app.use('/orders', orderRoutes);




// error handle middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('system error');
});


/// middleware
app.use((req, res,)=>{
    res.status(404).send('invalid page');
});




//listen 
//
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
