const express = require('express');
const router = express.Router();
const { getMovies } = require('../controllers/movieController');
const { validateBearerToken } = require('../controllers/authController');

router.get('/', validateBearerToken, getMovies);

module.exports = router;
