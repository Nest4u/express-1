const express = require('express');
const router = express.Router();


const articles = [
    { id: 1, title: 'Introduction to Node.js', content: 'Node.js is a JavaScript runtime...' },
    { id: 2, title: 'Getting started with Express', content: 'Express is a minimal web framework...' }
];


router.get('/', (req, res) => {
    res.render('articles/index.ejs', { articles });
});


router.get('/:articleId', (req, res) => {
    const article = articles.find(a => a.id == req.params.articleId);
    if (article) {
        res.render('articles/details.ejs', { article });
    } else {
        res.status(404).send('Article not found');
    }
});


module.exports = router;
