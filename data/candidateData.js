const candidateData = {
  profile: {
    name: "Antoine Rousselot",
    title: "Développeur Full Stack",
    location: "Paris, France",
    email: "rousselotantoine7@gmail.com",
    linkedin: "https://www.linkedin.com/in/antoine-rousselot/",
    github: "https://github.com/antorou",
    portfolio: "https://portfolio-git-main-antorous-projects.vercel.app/'",
    summary: "Jeune développeur passionné en reconversion et en recherche d'alternance.",
    availability: "Disponible immédiatement",
    languages: ["Français (natif)", "Anglais (avancé)"]
  },
  
  skills: {
    technical: {
      frontend: ["React", "Javascript", "TypeScript", "HTML5", "CSS3", "Sass"],
      backend: ["Node.js", "Express", "Ruby on Rails", "Django", "PHP"],
      databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      devops: ["Docker", "Git"],
      tools: ["VSCode", "Figma", "Postman", "Jira"]
    },
    soft: ["Communication", "Travail d'équipe", "Adaptabilité", "Créativité"]
  },
  
  projects: [
    {
      id: 1,
      name: "Matching de CV",
      description: "Outil de compatibilité entre CV et annonces",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Ollama"],
      github: "https://github.com/antorou/Jobmatching",
      features: ["Authentification Clerk", "Intégration LLM", "IA"],
      duration: "1 mois",
      role: "Développeur Full Stack"
    },
    {
      id: 2,
      name: "Togesong - Be Real musical",
      description: "Application de partage de musique quotidienne",
      technologies: ["React", "Node.js", "Express", "Docker", "MongoDB"],
      github: "https://github.com/antorou/Togesong",
      features: ["Collaboration temps réel", "Notifications", "API Spotfy"],
      duration: "2 mois",
      role: "Développeur Fullstack"
    }
  ],
    
  motivation: {
    whyThisRole: "Je suis passionné par les défis techniques complexes et j'adore créer des solutions qui ont un impact réel sur les utilisateurs.",
    careerGoals: "Évoluer vers un poste de Tech Lead tout en continuant à coder en premier lui, puis créer mon produit",
    whatDrivesMe: "L'innovation, l'apprentissage continu et la création de produits qui améliorent la vie des gens.",
    idealEnvironment: "Une équipe agile, des projets challengeants et une culture d'entreprise basée sur la collaboration.",
    strengths: ["Curiosité technique", "Esprit d'équipe", "Orientation résultats", "Adaptabilité"],
    interests: ["Intelligence Artificielle", "UX/UI Design", "DevOps"]
  }
};

module.exports = candidateData;