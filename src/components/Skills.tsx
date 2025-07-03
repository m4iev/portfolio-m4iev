import { FC } from "react";
import Section from "./Section";
import { portfolioData } from "../data/variables";

const Skills: FC = () => {
  return (
    <Section id="skills" title="Technical Skills" className="bg-yellow-300">
      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">
        <div className="flex flex-wrap gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-lime-50 text-black font-bold px-4 py-2 border-2 border-black"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
