import ProjectCard from './ProjectCard.jsx';
import React from 'react';

const Projects = ({ projects }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='800'>
      <div className='projects flex flex-col items-center'>
        <div className='text-5xl pb-5 md:text-7xl leading-10 text-center my-10'>
          <span className='dark:text-darkOpal text-black'>My</span>{' '}
          <span className='text-skyBlue'>Projects</span>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
