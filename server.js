const express = require('express');
const swaggerUi = require('swagger-ui-express');
const corsConfig = require('./config/cors');
const path = require('path');

const indexRoutes = require('./routes/index');
const profileRoutes = require('./routes/profile');
const skillsRoutes = require('./routes/skills');
const projectsRoutes = require('./routes/projects');
const motivationRoutes = require('./routes/motivation');
const statsRoutes = require('./routes/stats');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(corsConfig);
app.use(express.json());

const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRoutes);
app.use('/profile', profileRoutes);
app.use('/skills', skillsRoutes);
app.use('/projects', projectsRoutes);
app.use('/motivation', motivationRoutes);
app.use('/stats', statsRoutes);

app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API Candidat démarrée sur http://localhost:${PORT}`);
    console.log(`Documentation Swagger dispo sur http://localhost:${PORT}/api-docs`);
  });
}

module.exports = app;