const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const chef = require('./data/chef.json');
const slider = require('./data/slider.json');

app.use(cors())

app.get('/', (req, res)=> {
    res.send('chef is comming... cooking will start... we will enjoy delicious food')
})

app.get('/chef', (req, res)=>{
    res.send(chef);
})

app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedChef = chef.find(ch => ch.id === parseInt(id))
    res.send(selectedChef);
})

app.get('/slider', (req, res) => {
    res.send(slider);
})

app.listen(port, ()=>{
    console.log(`chef-receipe is running on port: ${port}`)
})