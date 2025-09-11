const express = require('express');
const router = express.Router();
const candidateData = require('../data/candidateData');

/**
 * @swagger
 * /skills:
 *   get:
 *     summary: Récupère toutes les compétences
 *     tags: [Skills]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [technical, soft]
 *         description: Filtre par type de compétence
 *     responses:
 *       200:
 *         description: Liste des compétences
 */
router.get('/', (req, res) => {
  const { type } = req.query;
  
  if (type === 'technical') {
    return res.json(candidateData.skills.technical);
  }
  
  if (type === 'soft') {
    return res.json(candidateData.skills.soft);
  }
  
  res.json(candidateData.skills);
});

/**
 * @swagger
 * /skills/{category}:
 *   get:
 *     summary: Récupère les compétences par catégorie
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *           enum: [frontend, backend, databases, devops, tools]
 *         description: Catégorie de compétences techniques
 *     responses:
 *       200:
 *         description: Compétences de la catégorie demandée
 *       404:
 *         description: Catégorie non trouvée
 */
router.get('/:category', (req, res) => {
  const { category } = req.params;
  const skills = candidateData.skills.technical[category];
  
  if (!skills) {
    return res.status(404).json({ error: 'Catégorie non trouvée' });
  }
  
  res.json({
    category,
    skills
  });
});

module.exports = router;