const swaggerJsdoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Candidat - Antoine Rousselot',
      version: '1.0.0',
      description: 'API REST pour découvrir mon profil professionnel de manière interactive',
      contact: {
        name: 'Antoine Rousselot',
        email: 'rousselotantoine7@gmail.com',
        url: 'https://portfolio-git-main-antorous-projects.vercel.app/'
      }
    },
    servers: [
      {
        url: process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : `http://localhost:${PORT}`,
        description: 'Serveur dynamique (local ou Vercel)'
      }
    ],
    tags: [
      {
        name: 'Profile',
        description: 'Informations générales du candidat'
      },
      {
        name: 'Skills',
        description: 'Compétences techniques et soft skills'
      },
      {
        name: 'Projects',
        description: 'Projets réalisés et portfolio'
      },
      {
        name: 'Motivation',
        description: 'Motivations et aspirations'
      }
    ]
  },
  apis: ['./routes/*.js'], // Swagger lira tous les fichiers de routes
};

const specs = swaggerJsdoc(swaggerOptions);

const options = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "API Candidat - Documentation"
};

module.exports = {
  specs,
  options
};