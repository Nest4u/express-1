const express = require('express');
const router = express.Router();


const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
];


router.get('/', (req, res) => {
    console.log('Users:', users); 
    res.render('users/index', { users });
});


router.get('/:userId', (req, res) => {
    const user = users.find(u => u.id == req.params.userId);
    if (user) {
        res.render('users/details', { user });
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;
