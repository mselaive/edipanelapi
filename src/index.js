const express = require('express')
const app = express()
const port = 3306 // Port number
const routes = require('./api/endPoints');
const cors = require('cors')

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(cors());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
    } )
    
