const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')
const port = 8000;
const userRoute = require('./routes/userRoute')
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use('/api/user', userRoute);
app.listen(port, () => console.log(`Server is running on port ${port}`));
