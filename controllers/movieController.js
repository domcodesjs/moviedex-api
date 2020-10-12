const db = require('../db.json');

exports.getMovies = async (req, res) => {
  const query = new URLSearchParams(req.query);
  let movies = db;

  if (query.has('genre')) {
    const genre = query.get('genre');

    if (genre.trim() === '') {
      return res.json({
        success: false,
        message: 'Please provide a valid genre query'
      });
    }

    movies = movies.filter((movie) =>
      movie.genre.toLocaleLowerCase().includes(genre.toLocaleLowerCase())
    );
  }

  if (query.has('country')) {
    const country = query.get('country');

    if (country.trim() === '') {
      return res.json({
        success: false,
        message: 'Please provide a valid country query'
      });
    }

    movies = movies.filter((movie) =>
      movie.country.toLocaleLowerCase().includes(country.toLocaleLowerCase())
    );
  }

  if (query.has('avg_vote')) {
    const avg_vote = query.get('avg_vote');

    if (avg_vote.trim() === '') {
      return res.json({
        success: false,
        message: 'Please provide a valid avg_vote query'
      });
    }

    movies = movies.filter((movie) => movie.avg_vote >= Number(avg_vote));
  }

  return res.json({
    success: true,
    movies
  });
};
