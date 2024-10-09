const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const puppeteer = require('puppeteer')
const app = express();

const PORT = 5000;

app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', require('./routes/country'));

app.listen(PORT, () => {
    console.log(`Application Running on PORT: ${PORT}`);
})