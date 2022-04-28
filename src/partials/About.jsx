import React from 'react';

const About = ({ title }) => {
  return (
    <div className='background max-w-4xl mx-auto mt-16 sm:p-10 p-5 text-black dark:text-white'>
      <h1 className='text-2xl pb-5 md:text-5xl font-bold text-center'>
        {title}
      </h1>
      <p className='text-base text-left md:text-center leading-relaxed mt-4'>
        I am a React JS Developer, excited to learn more about how Technology
        and Business work in the corporate world. I have a tendency to always
        ask questions about how certain things work, no matter what the topic
        is. What piques my interest is understanding Business Strategies,
        Models, and other aspects related to business. <br />
        My Hard Skills: Creating Sleek, Elegant, Low Overhead and Mobile
        Responsive websites with libraries like React JS, Redux, Typescript,
        Mongo DB, Mongoose, Tailwind CSS/Bootstrap 5, Express JS. I am
        currently aiming towards increasing my tech stack towards technologies
        like Solidity, GraphQL and NEXT JS.
        <br />
        My Soft Skills: I have a good command of verbal and written English. My
        earnest attitude towards getting the job done makes me a good addition
        to the team and with time and after gaining experience I would like to
        move on to a managing position.
      </p>
    </div>
  );
};

export default About;
