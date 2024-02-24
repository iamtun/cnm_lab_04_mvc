import express from 'express';

const PORT = 3000;
const app = express();

//register middlewares
app.use(express.json({extended: false}));
app.use(express.static('./views'));

//config view
app.set('view engine', 'ejs');
app.set('views', './views');


// routers
app.get('/', (req, resp) => resp.render('index'))



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})