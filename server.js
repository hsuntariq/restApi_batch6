// require express to use express
const express = require('express');
// in order to use functionality of express, make an instance of express
const app = express();
// require dotenv lib to use .env variables
require('dotenv').config();
// require colors lib to make the terminal interactive
require('colors')

app.use('/api/data/', require('./routes/dataRoutes'))


app.listen(process.env.PORT, () => console.log(`server started on port ${process.env.PORT.yellow}`))