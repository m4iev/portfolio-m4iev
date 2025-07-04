import { FC, useState } from "react";
import { portfolioData } from "../data/variables";
import ProjectCard from "./ProjectCard";

const Projects: FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-b-4 border-black bg-cyan-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-2 md:mb-0 inline-block">
          My Projects
        </h2>
        <button
          className="px-6 py-2 rounded-lg border-4 border-black bg-yellow-300 text-black font-bold shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] active:translate-x-2 active:translate-y-2 active:shadow-none"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className="w-full group mt-8">
        {showAll ? (
          <div className="flex flex-wrap justify-center gap-6">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="mx-2 my-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex animate-scroll-left">
            {[...portfolioData.projects, ...portfolioData.projects].map(
              (project, index) => (
                <div key={index} className="mx-5">
                  <ProjectCard project={project} />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
