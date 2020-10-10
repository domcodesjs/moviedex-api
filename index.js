const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Check if user is authorized. Very unsecure. This runs before each route.
app.use(function validateBearerToken(req, res, next) {
  const apiToken = '54a74ba1-56a2-4bcf-8f05-6097914666fe';
  const authToken = req.get('Authorization');
  // Bearer 54a74ba1-56a2-4bcf-8f05-6097914666fe split on the space and
  // grab the second value to do a a comparison
  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }
  next();
});

// Routes
app.use('/movie', require('./routes/movieRoutes'));

const port = 4000;
app.listen(port, () => console.log(`Express is running on port ${port}`));
