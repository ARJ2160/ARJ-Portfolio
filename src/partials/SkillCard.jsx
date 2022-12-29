import React from 'react';

const SkillCard = ({ id, skillName, skillIcon }) => {
  return (
    <div
      className='m-4 w-40 flex justify-center items-center flex-col mx-auto text-center p-5 rounded-xl border-2 bg-white text-black border-gray-300'
      key={id}>
      {skillIcon}
      <p className='text-xl font-semibold mt-4'>{skillName}</p>
    </div>
  );
};

export default SkillCard;
