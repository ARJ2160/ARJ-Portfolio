import React from "react";
// import profile from "../images/profile.png";
import pic from "../images/Atharva_Joshi.jpg";
import { FaGithub, FaTwitter, FaRegEnvelope, FaSpotify } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Card = ({ name, title, social: { GitHub, LinkedIn, Twitter, Email, Spotify } }) => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
                <div className="">
                    <img
                        className="w-32 mx-auto shadow-xl rounded-full"
                        src={pic}
                        alt="Profile face"
                    />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                        {name}
                    </p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        {title}
                    </p>
                    <div className="flex align-center justify-center mt-4">
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href={Twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300" href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + Email} target="_blank" rel="noopener noreferrer"
                        >
                            <FaRegEnvelope />
                            <span className="sr-only">Email</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href={GitHub} target="_blank" rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span className="sr-only">Github</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-900 rounded-full hover:text-white transition-colors duration-300" href={LinkedIn} target="_blank" rel="noopener noreferrer"
                        >
                            <SiLinkedin />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href={Spotify} target="_blank" rel="noopener noreferrer"
                        >
                            <FaSpotify />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;