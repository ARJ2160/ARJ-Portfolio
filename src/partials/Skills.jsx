import React from 'react';
import SkillCard from './SkillCard.jsx';

const Skills = ({ skills }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='800'>
      <div className='tech-stack mt-5 h-fit'>
        <div className='md:text-7xl sm:text-5xl text-4xl pb-5 leading-10 text-center my-10'>
          <span className='dark:text-opal text-black leading-4'>Here's my</span>{' '}
          <span className='text-skyBlue'>Tech Stack</span>
        </div>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 w-fit gap-7 mx-auto mt-8'>
          {skills.map((skill) => {
            return (
              <SkillCard
                key={skill.id}
                skillName={skill.skillName}
                skillIcon={skill.skillIcon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
// text-4xl pb-5 md:text-5xl text-center
