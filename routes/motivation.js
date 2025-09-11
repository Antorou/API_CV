const express = require('express');
const router = express.Router();
const candidateData = require('../data/candidateData');

/**
 * @swagger
 * /motivation:
 *   get:
 *     summary: Récupère les motivations du candidat
 *     tags: [Motivation]
 *     responses:
 *       200:
 *         description: Motivations et aspirations
 */
router.get('/', (req, res) => {
  res.json(candidateData.motivation);
});

module.exports = router;