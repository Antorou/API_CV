const express = require('express');
const router = express.Router();
const candidateData = require('../data/candidateData');

/**
 * @swagger
 * /stats:
 *   get:
 *     summary: Statistiques du profil
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Statistiques générales du candidat
 */
router.get('/', (req, res) => {
  const stats = {
    totalProjects: candidateData.projects.length,
    technicalSkills: Object.values(candidateData.skills.technical).flat().length,
    softSkills: candidateData.skills.soft.length,
    languages: candidateData.profile.languages.length,
    topTechnologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  };
  
  res.json(stats);
});

module.exports = router;