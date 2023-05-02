const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res)=> {
    res.send('chef is comming... cooking will start... we will enjoy delicious food')
})

app.listen(port, ()=>{
    console.log(`chef-receipe is running on port: ${port}`)
})