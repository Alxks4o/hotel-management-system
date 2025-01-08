const express = require('express'); //fetches the express package 
const cors = require('cors');
const connectDB = require('./config/db')
require('dotenv').config()
const app = express(); //app holds express

const authRoutes = require('./routes/authRouter')

connectDB(); //calling the connectDB function to connect to db
app.use(cors());
const PORT = process.env.PORT||3001;



app.get('/',(req,res) =>{
    res.send('Hey there');
});

app.listen(PORT, () => console.log(`SERVER running on http://localhost:${PORT}`));