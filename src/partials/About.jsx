import React from 'react';

const About = () => {
  return (
    <div className='background max-w-4xl mx-auto mt-16 sm:p-10 p-5 text-black dark:text-white'>
      <div className='text-4xl pb-5 md:text-5xl text-center'>
        <span className='font-bold'>My</span>{' '}
        <span className='text-skyBlue font-bold'>Background</span>
      </div>
      <p className='text-base text-left md:text-center leading-relaxed mt-4'>
        I am a React JS Developer, excited to learn more about how Technology
        and Business work in the corporate world. <br />
        My Hard Skills: Creating Sleek, Elegant, Low Overhead and Mobile
        Responsive websites with libraries like React JS, Redux, Typescript,
        Mongo DB, Mongoose, Tailwind CSS/Bootstrap 5, Express JS. I am
        currently aiming towards increasing my tech stack towards technologies
        like Solidity, GraphQL and NEXT JS.
      </p>
    </div>
  );
};

export default About;
