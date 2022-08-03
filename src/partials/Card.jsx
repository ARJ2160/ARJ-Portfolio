import React from 'react';
import pic from '../images/Atharva_Joshi.webp';
import Typewriter from 'typewriter-effect';
import { data } from '../assets/data';

const Card = () => {
  return (
    <div className='w-full min-h-full dark:text-black h-screen flex justify-center flex-col items-center text-center'>
      <img src={pic} className='w-28 h-28 my-7 shadow-xl rounded-full' alt='ARJ Image' />
      <div className='text-2xl md:text-xl font-mono flex items-center justify-between text-center text-skyBlue'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Hi')
              .pauseFor(1000)
              .deleteAll()
              .typeString("Kon'nichiwa")
              .pauseFor(1000)
              .deleteAll()
              .typeString('Hola')
              .pauseFor(1000)
              .deleteAll()
              .typeString('Hi')
              .start();
          }}
        />
        <span className='ml-2'>{data.hero.my_name_is}</span>
      </div>
      <span className='md:text-8xl text-5xl dark:text-opal text-black'>
        {data.hero.name}
      </span>
      <span className='md:text-8xl text-5xl dark:text-darkOpal text-black'>
        {data.hero.subText}
      </span>
      <p className='sm:w-2/4 w-4/5 pt-5 md:text-lg md:text-center text-left text-base text-skyBlue'>
        {data.hero.about_me}
      </p>
    </div>
  );
};

export default Card;
