import React from "react";
import SkillCard from "./SkillCard.jsx";

const Skills = ({ skills }) => {
    return (
        <div className="tech-stack">
            <h1 className="text-2xl md:text-5xl text-center font-extrabold">Here's my Tech Stack</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 max-w-2xl mx-auto mt-8">
                {skills.map((skill) => {
                    return (
                        <SkillCard
                            key={skill.id}
                            skillName={skill.skillName}
                            skillIcon={skill.skillIcon}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;
