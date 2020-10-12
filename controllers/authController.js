exports.validateBearerToken = (req, res, next) => {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get('Authorization');
  // Bearer 54a74ba1-56a2-4bcf-8f05-6097914666fe split on the space and
  // grab the second value to do a a comparison
  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }
  next();
};
