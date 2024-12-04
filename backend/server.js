const express = require('express'); //fetches the express package 
const cors = require('cors');
const app = express(); //app holds express

const PORT = 3001

app.use(cors())

app.get('/',(req,res) =>{
    res.send('Hey there');
});

app.listen(PORT, () => console.log(`SERVER running on http://localhost:${PORT}`));