const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); 


app.engine('ejs', require('ejs').__express);

app.use(express.static(path.join(__dirname, 'public')));


const usersRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');

app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);


app.get('/', (req, res) => {
    res.render('index.pug', { title: 'Home' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
