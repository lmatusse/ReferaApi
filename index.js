const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);

const PORT = 8081;
app.listen(PORT, () => {
    console.log(` Hello, Server is listening to port ${PORT}`)
})