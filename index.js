const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
// Routes
const movieRoutes = require('./routes/movieRoutes');

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/movie', movieRoutes);

const port = 4000;
app.listen(port, () => console.log(`Express is running on port ${port}`));
