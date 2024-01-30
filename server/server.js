const express = require('express');
const app = express();
const http =  require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');
require('./src/config/db');

app.use(cors());
app.use(cors());    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', require('./src/routes/authRoutes'));
app.use('/api/dahboard', require('./src/routes/dashboardRoute'));

server.listen(8080, () => {
    console.log('Port is open');
})