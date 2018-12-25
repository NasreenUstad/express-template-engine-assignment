const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const usersData = require('./routes/user');
const homeRoutes = require('./routes/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersData.router);
app.use(homeRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: '404 Page Not Found', path: ''});
});

app.listen(8080);