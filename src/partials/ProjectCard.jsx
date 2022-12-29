import React from 'react';

const ProjectCard = ({ keys, project }) => {
  let i = 0;
  const { title, description, tags, projectLink, link, image } = project;
  return (
    <div
      key={keys}
      className='max-w-sm dark:bg-white dark:text-black bg-backgroundBlue text-white shadow-lg rounded-lg overflow-hidden my-4'>
      <a href={projectLink} target='_blank' rel='noopener noreferrer'>
        <img
          className='w-full aspect-auto object-cover object-center'
          src={image}
          loading='lazy'
          alt=' No image available'
        />
      </a>
      <div className='py-4 px-4'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <p className='text-blue-600 my-2'>View Code</p>
        </a>
        <div className='py-4 px-4'>
          <h1 className='text-2xl'>{title}</h1>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <p className='text-blue-600 my-2'>View Code</p>
          </a>
          <p className='py-2 text-lg'>{description}</p>
          <div className='mt-4 mb-8 flex flex-wrap justify-center items-center gap-2'>
            {tags.map((tag) => (
              <div key={i++} className='px-4 py-1 border-2 rounded-full'>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
