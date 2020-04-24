const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();


console.log(__dirname);
console.log(__filename);
//Setup public assets in the app
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

// Setup views and partials path in the app
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        'title': 'Home',
        'name': 'SelvaRaj'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        'title': 'About',
        'name': 'Selva'
    })
});
app.get('/help/:name', (req, res) => {
    const name = req.params.name;
    res.render('about', {
        'title': 'Help',
        'name': name
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        'title': 'Error',
        'errorMessage': '404 page not found...!'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000...!')
})