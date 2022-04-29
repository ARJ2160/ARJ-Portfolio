import 'aos/dist/aos.css';
import './App.css';

import React, { useEffect } from 'react';

import AOS from 'aos';
import About from './partials/About.jsx';
import Card from './partials/Card.jsx';
import Footer from './partials/Footer.jsx';
import Projects from './partials/Projects.jsx';
import Skills from './partials/Skills.jsx';
import data from './assets/data';
import sunSvg from './images/sun.svg';
import useDarkMode from './hooks/useDarkMode.js';

const App = () => {
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div className='min-h-screen py-10 px-3 sm:px-5 dark:bg-backgroundBlue dark:text-white bg-white text-black'>
      <div data-aos='fade-down' data-aos-duration='800'>
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
        <About />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Footer github={data.social.GitHub} />
      </div>
      <div>
        <img
          src={sunSvg}
          width={30}
          height={30}
          alt='Toggle theme'
          className='cursor-pointer fixed top-5 right-5 toggleTheme'
          onClick={() => setTheme(colorTheme)}
        />
      </div>
    </div>
  );
};
export default App;
