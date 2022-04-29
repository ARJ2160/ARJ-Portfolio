import ProjectCard from './ProjectCard.jsx';
import React from 'react';

const Projects = ({ projects }) => {
  return (
    <div className='projects flex flex-col items-center'>
      <div className='text-4xl pb-5 md:text-5xl text-center my-10'>
        <span className='font-bold'>My</span>{' '}
        <span className='text-skyBlue font-bold'>Projects</span>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
