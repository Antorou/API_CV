const express = require('express');
const router = express.Router();
const candidateData = require('../data/candidateData');

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Récupère le profil complet du candidat
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Profil du candidat récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 title:
 *                   type: string
 *                   example: "Développeur Full Stack"
 *                 location:
 *                   type: string
 *                   example: "Paris, France"
 *                 email:
 *                   type: string
 *                   example: "john.doe@email.com"
 *                 summary:
 *                   type: string
 *                 availability:
 *                   type: string
 *                 languages:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.get('/', (req, res) => {
  res.json(candidateData.profile);
});

module.exports = router;