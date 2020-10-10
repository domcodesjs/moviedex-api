const db = require('../db.json');

exports.getMovies = async (req, res) => {
  const query = new URLSearchParams(req.query);

  if (query.has('genre')) {
    const genre = query.get('genre');

    if (genre.trim() === '') {
      return res.json({
        success: false,
        message: 'Please provide a valid query'
      });
    }

    const movies = db.filter((movie) =>
      movie.genre.toLocaleLowerCase().includes(genre.toLocaleLowerCase())
    );

    if (!movies.length) {
      return res.json({
        success: true,
        message: 'No movies found'
      });
    }

    return res.json({
      success: true,
      movies
    });
  }

  if (query.has('country')) {
    const country = query.get('country');

    if (country.trim() === '') {
      return res.json({
        success: false,
        message: 'Please provide a valid query'
      });
    }

    const movies = db.filter((movie) =>
      movie.country.toLocaleLowerCase().includes(country.toLocaleLowerCase())
    );

    if (!movies.length) {
      return res.json({
        success: true,
        message: 'No movies found'
      });
    }

    return res.json({
      success: true,
      movies
    });
  }

  if (query.has('avg_vote')) {
    const avg_vote = query.get('avg_vote');

    if (avg_vote.trim() === '') {
      return res.json({
        success: false,
        message: 'Please provide a valid query'
      });
    }

    const movies = db.filter((movie) => movie.avg_vote >= Number(avg_vote));

    if (!movies.length) {
      return res.json({
        success: true,
        message: 'No movies found'
      });
    }

    return res.json({
      success: true,
      movies
    });
  }

  return res.json({
    success: false,
    message: 'Invalid query'
  });
};
