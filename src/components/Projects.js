import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Algorithms and Systems Analysis',
      description: 'Focused on solving algorithmic challenges and system design problems.',
      link: 'https://github.com/JFortunato20/School-Projects/tree/main/Algorithms-Systems-Analysis'
    },
    {
      title: 'Database Management CMS Project',
      description: 'A contact management system using SQL and Python.',
      link: 'https://github.com/JFortunato20/School-Projects/tree/main/Database-Management-CMS-Project'
    },
    {
      title: 'JavaScript Calculator',
      description: 'A functional calculator built using JavaScript.',
      link: 'https://github.com/JFortunato20/School-Projects/tree/main/JS-Calculator'
    },
    {
      title: 'Software Dev2 Final Project',
      description: 'A restaurant website with integrated pages and a clean design.',
      link: 'https://github.com/JFortunato20/School-Projects/tree/main/Software-Dev2-Final-Pject'
    }
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card fade-in">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
