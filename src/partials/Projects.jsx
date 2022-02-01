import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const Projects = ({ projects }) => {
    return (
        <div className="projects">
            <h1 className="mt-8 text-2xl md:text-5xl text-center font-extrabold">My projects</h1>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projects;