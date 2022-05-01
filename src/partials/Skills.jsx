import React from 'react';
import SkillCard from './SkillCard.jsx';

const Skills = ({ skills }) => {
  return (
    <div className='tech-stack mt-5'>
      <div className='text-4xl pb-5 md:text-5xl text-center'>
        <span className='font-bold'>Here's my</span>{' '}
        <span className='text-skyBlue font-bold'>Tech Stack</span>
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
  );
};

export default Skills;
