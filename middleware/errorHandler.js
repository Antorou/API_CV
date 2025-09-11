module.exports = (req, res) => {
  res.status(404).json({
    error: 'Endpoint non trouvé',
    availableEndpoints: [
      'GET /',
      'GET /profile',
      'GET /skills',
      'GET /projects',
      'GET /motivation',
      'GET /stats'
    ]
  });
};