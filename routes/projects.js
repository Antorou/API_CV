const express = require('express');
const router = express.Router();
const candidateData = require('../data/candidateData');

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Récupère tous les projets
 *     tags: [Projects]
 *     parameters:
 *       - in: query
 *         name: tech
 *         schema:
 *           type: string
 *         description: Filtre par technologie
 *     responses:
 *       200:
 *         description: Liste des projets
 */
router.get('/', (req, res) => {
  const { tech } = req.query;
  
  if (tech) {
    const filteredProjects = candidateData.projects.filter(project =>
      project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
    );
    return res.json(filteredProjects);
  }
  
  res.json(candidateData.projects);
});

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Récupère un projet spécifique
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du projet
 *     responses:
 *       200:
 *         description: Détails du projet
 *       404:
 *         description: Projet non trouvé
 */
router.get('/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = candidateData.projects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).json({ error: 'Projet non trouvé' });
  }
  
  res.json(project);
});

module.exports = router;