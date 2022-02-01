import React from "react";

const About = ({ title }) => {
    return (
        <div className="background max-w-4xl mx-auto mt-16 sm:p-10 p-5">
            <h1 className="text-2xl md:text-5xl font-bold text-center">{title}</h1>
            <p className="text-base text-left md:text-center text-gray-600 dark:text-white leading-relaxed mt-4">
                I am a Rookie  <strong>React JS Developer</strong>, excited to learn more about how Technology and Business work in the corporate world. I have a tendency to always ask questions about how certain things work, no matter what the topic is. What piques my interest is understanding Business Strategies, Business Models, and other various aspects related to businesses. <br />
                <strong>My Hard Skills:</strong> Creating sleek, elegant, low overhead websites with libraries like Express JS, React JS, Redux, Mongo DB, Mongoose, and Tailwind. I am currently aiming towards increasing my tech stack so as to learn in-demand skills like Next JS, GraphQL and TypeScript.
                <br />
                <strong>My Soft Skills:</strong>  I have a good command of verbal and written English. My earnest attitude towards getting the job done makes me a good addition to the team and with time and after gaining experience I would like to move on to a managing position.
            </p>
        </div>
    );
}

export default About;
