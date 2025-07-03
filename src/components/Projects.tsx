import { FC } from "react";
import { portfolioData } from "../data/variables";
import ProjectCard from "./ProjectCard";

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-b-4 border-black bg-cyan-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-12 inline-block">
          My Projects
        </h2>
      </div>
      <div className="w-full group">
        <div className="flex animate-scroll-left">
          {[...portfolioData.projects, ...portfolioData.projects].map(
            (project, index) => (
              <div key={index} className="mx-5">
                <ProjectCard project={project} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
