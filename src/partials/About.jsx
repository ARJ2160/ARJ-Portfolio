import React from 'react';

const About = ({ about }) => {
  return (
    <div className='background max-w-4xl mx-auto mt-16 sm:p-10 p-5 text-black dark:text-white'>
      <div className='text-4xl pb-5 md:text-6xl leading-10 text-center my-10'>
        <span className='font-bold'>My</span>{' '}
        <span className='text-skyBlue font-bold'>Background</span>
      </div>
      <p className='text-lg text-left md:text-center leading-relaxed mt-4'>
        "I am a React JS developer, excited to learn more about how technology
        and business work in the corporate world. I have a tendency to always
        ask questions about how certain things work, no matter what the topic
        is. What piques my interest in understanding business strategies,
        models, and other aspects related to business.
        <br />
        My Hard Skills: Creating sleek, elegant, low overhead, and mobile
        responsive websites with libraries like React JS, Redux, Typescript,
        Mongo DB, Mongoose, Tailwind CSS/Bootstrap 5, Express JS. I am
        currently aiming towards increasing my tech stack towards technologies
        like Solidity, GraphQL, and NEXT JS."
      </p>
    </div>
  );
};

export default About;
