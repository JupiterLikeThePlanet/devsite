const express = require('express');
const connectDB = require('./config/db')

const connectDB = require('./config/db');

const app = express()

<<<<<<< HEAD

connectDB();

=======
//connect database
connectDB();

//initialize middleware
app.use(express.json({extended: false}))

>>>>>>> 1d426b2b43dea0dcca8828bebd54da53f7c00467
app.get('/', (req,res) => res.send("API RUNNING"))

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starting up on port ${PORT}`))