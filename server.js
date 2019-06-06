const express = require('express');

const app = express()

app.get('/', (req,res) => res.send("API RUNNING"))

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starting up on port ${PORT}`))