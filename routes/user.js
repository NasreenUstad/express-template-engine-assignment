const express = require('express');
const router = express.Router();

const users = [];
router.get('/users', (req, res, next) => {
    console.log('/users' , users);
    res.render('user', {users: users, pageTitle: 'Users Page', path: '/users'});
});

router.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username});
    res.redirect('/users');
});

exports.router = router;
exports.users = users;