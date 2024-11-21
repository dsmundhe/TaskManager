const express = require('express');
const app = express();

//routes rile imported
const userRout = require('./routes/routes');

//dotenv setup
const dotenv = require('dotenv');
dotenv.config();
const PORT = 4000 || process.env.PORT;

// db Connection 
const { dbConnection } = require('./db/dbConnection');
dbConnection();

//json data access middleware
app.use(express.json());

//for access form data
app.use(express.urlencoded({ extended: false }));


// for routing 
app.use('/user', userRout);


app.get('/', (req, res) => {
    res.json({ msg: "Hey i am Home!" })
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})