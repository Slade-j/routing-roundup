const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {

    res.send('Hello from Express!')
})

app.get(/^\/.*xyz\/?$/, (req, res) => {
    res.send("That's all I wrote.")
})

app.get('/capital-letters/:key', (req, res) => {
    let capitalized = req.params.key;
    capitalized = capitalized.toUpperCase();
    res.send(capitalized);
})

app.all('*', (req, res)=> {
    const random = Math.floor(Math.random() * Math.floor(10))
    res.render('index', { path: req.path, method: req.method, random})
})


const port = 8081;
app.listen(port, ()=> console.log(`Listening on: ${port}`));
