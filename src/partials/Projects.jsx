import ProjectCard from './ProjectCard.jsx';
import React from 'react';

const Projects = ({ projects }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='800'>
      <div className='projects flex flex-col items-center md:px-24'>
        <div className='md:text-7xl text-5xl pb-5 text-center my-10'>
          <span className='dark:text-darkOpal text-black leading-10'>My</span>{' '}
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
