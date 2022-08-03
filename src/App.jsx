import 'aos/dist/aos.css';
import './App.css';

import React, { useEffect } from 'react';

import AOS from 'aos';
import About from './partials/About.jsx';
import Hero from './partials/Hero.jsx';
import Footer from './partials/Footer.jsx';
import Projects from './partials/Projects.jsx';
import Skills from './partials/Skills.jsx';
import { data } from './assets/data';
import sunSvg from './images/lightMode.svg';
import moonSvg from './images/darkMode.svg';
import useDarkMode from './hooks/useDarkMode.js';
import {
  FaFolder,
  FaGithub,
  FaRegEnvelope,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import ARJResume from './assets/ARJ-Resume.pdf';

const App = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const { skills, projects, social } = data;
  const { GitHub, LinkedIn, Twitter, Email, Spotify } = social;
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div className='min-h-screen py-10 px-3 sm:px-5 dark:bg-backgroundBlue dark:text-white bg-white text-black'>
      <div data-aos='fade-down' data-aos-duration='800'>
        <Hero />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Footer github={social.GitHub} />
      </div>
      {colorTheme === 'light' ? (
        <img
          src={sunSvg}
          width={30}
          height={30}
          alt='Toggle theme'
          className='cursor-pointer fixed top-5 right-5 select-none'
          onClick={() => setTheme(colorTheme)}
        />
      ) : (
        <img
          src={moonSvg}
          width={30}
          height={30}
          alt='Toggle theme'
          className='cursor-pointer fixed top-5 right-5 select-none'
          onClick={() => setTheme(colorTheme)}
        />
      )}
      <div className='social-media md:fixed md:block hidden bottom-10 left-10 z-10'>
        <ul className='social-media-list flex flex-col items-center list-none m-0 p-0'>
          <li>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 dark:text-white dark:hover:bg-gray-800 text-black hover:bg-teal-500 rounded-full transition-transform group hover:translate-y-[-5px]'
              href={GitHub}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
              <span className='tooltip group-hover:scale-100'>GitHub</span>
              <span className='sr-only'>Github</span>
            </a>
          </li>
          <li>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-black rounded-full transition-transform group hover:translate-y-[-5px]'
              href={LinkedIn}
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiLinkedin />
              <span className='tooltip group-hover:scale-100'>LinkedIn</span>
              <span className='sr-only'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full transition-transform group hover:translate-y-[-5px]'
              href={Spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaSpotify />
              <span className='tooltip group-hover:scale-100'>Spotify</span>
              <span className='sr-only'>Spotify</span>
            </a>
          </li>
          <li>
            <a
              className='text-blue-500 hover:bg-black relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 rounded-full transition-transform group hover:translate-y-[-5px]'
              href={Twitter}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
              <span className='tooltip group-hover:scale-100'>Twitter</span>
              <span className='sr-only'>Twitter</span>
            </a>
          </li>
          <li>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 hover:dark:text-white hover:bg-teal-500 rounded-full transition-transform group hover:translate-y-[-5px]'
              href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + Email}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaRegEnvelope />
              <span className='tooltip group-hover:scale-100'>Email</span>
              <span className='sr-only'>Email</span>
            </a>
          </li>
          <li>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full transition-transform group hover:translate-y-[-5px]'
              href={ARJResume}
              download='Professional Resume - Atharva Joshi.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFolder />
              <span className='tooltip group-hover:scale-100'>Resume</span>
              <span className='sr-only'>Resume</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='md:fixed md:block hidden right-[-35px] bottom-48 z-10 transition-all rotate-90'>
        <div className='email flex flex-row items-center'>
          <a
            href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + Email}
            target='_blank'
            className='email-link mr-10 hover:dark:text-white duration-300 dark:text-skyBlue text-black'
          >
            atharvaj2160@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default App;
