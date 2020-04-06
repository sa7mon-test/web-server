const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 5000;

// Set up a view engine to hbs
app.set('view engine', 'hbs');
// Use partials
hbs.registerPartials(__dirname + '/views/partials');

// Define a middleware to use:
app.use((req, res, next) => {
   res.render('error.hbs');
});

app.use((req, res, next) => {
   console.log(`Method: ${req.method}, IP: ${req.ip}, path: ${req.path}`);
   next();
});

// Serving static content in Express
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
   res.send('<h1>Hello, spring!</h1>');
});

app.get('/about', (req, res) => {
   res.send({
      id: 'SPR20',
      name: 'Spring 2020'
   });
});

app.get('/faq', (req, res) => {
   res.render('faq.hbs', {
      pageHeading: 'Frequently Asked Questions',
      pageAuthor: 'Dan Salmon',
      copyrights: 'All rights reserved'
   });
});

app.listen(port, () => {
   console.log(`Web server listening on port ${port}.`);
});

