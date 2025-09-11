const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Point d'entrée de l'API
 *     description: Retourne les informations de base de l'API candidat
 *     responses:
 *       200:
 *         description: Succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 documentation:
 *                   type: string
 *                 endpoints:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.get('/', (req, res) => {
  res.json({
    message: "Bienvenue sur mon API candidat.",
    documentation: "/api-docs",
    endpoints: [
      "GET /profile - Profil complet",
      "GET /skills - Compétences techniques et soft skills",
      "GET /projects - Portfolio de projets",
      "GET /motivation - Motivations et aspirations"
    ]
  });
});

module.exports = router;