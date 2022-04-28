import {
  FaFolder,
  FaGithub,
  FaRegEnvelope,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa';

import ARJResume from '../assets/ARJ-Resume.pdf';
import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import pic from '../images/Atharva_Joshi.jpg';

// import profile from "../images/profile.png";

const Card = ({
  name,
  title,
  social: { GitHub, LinkedIn, Twitter, Email, Spotify },
}) => {
  return (
    <div className='w-full dark:text-black'>
      <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5 mt-10'>
        <div className='profile-pic'>
          <img
            className='w-32 mx-auto shadow-xl rounded-full'
            src={pic}
            alt='Profile face'
          />
        </div>
        <div className='text-center mt-5'>
          <p className='name text-xl sm:text-2xl font-semibold'>{name}</p>
          <p className='text-xs sm:text-base pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
            {title}
          </p>
          <div className='flex align-center justify-center mt-4'>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300 group'
              href={Twitter}
              target='_blank'
              rel='noopener noreferrer'>
              <FaTwitter />
              <span className='tooltip group-hover:scale-100'>Twitter</span>
              <span className='sr-only'>Twitter</span>
            </a>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300 group'
              href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + Email}
              target='_blank'
              rel='noopener noreferrer'>
              <FaRegEnvelope />
              <span className='tooltip group-hover:scale-100'>Email</span>
              <span className='sr-only'>Email</span>
            </a>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 group'
              href={GitHub}
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithub />
              <span className='tooltip group-hover:scale-100'>GitHub</span>
              <span className='sr-only'>Github</span>
            </a>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-900 rounded-full hover:text-white transition-colors duration-300 group'
              href={LinkedIn}
              target='_blank'
              rel='noopener noreferrer'>
              <SiLinkedin />
              <span className='tooltip group-hover:scale-100'>LinkedIn</span>
              <span className='sr-only'>LinkedIn</span>
            </a>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300 group'
              href={ARJResume}
              download='Professional Resume - Atharva Joshi.pdf'
              target='_blank'
              rel='noopener noreferrer'>
              <FaFolder />
              <span className='tooltip group-hover:scale-100'>Resume</span>
              <span className='sr-only'>Resume</span>
            </a>
            <a
              className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300 group'
              href={Spotify}
              target='_blank'
              rel='noopener noreferrer'>
              <FaSpotify />
              <span className='tooltip group-hover:scale-100'>Spotify</span>
              <span className='sr-only'>Spotify</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
