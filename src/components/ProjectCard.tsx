import { ArrowRight, Figma, FileText, Github } from "lucide-react";
import { Project } from "../util/types";
import { FC } from "react";
import MediumIcon from "./MediumIcon";

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-none border-4 border-black p-6 flex flex-col h-full shadow-[8px_8px_0px_#000] w-96 max-w-full sm:w-96 flex-shrink-0 mx-4 sm:mx-0">
      <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-black text-sm font-medium px-3 py-1 border-2 border-black"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-end gap-4 mt-auto pt-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-yellow-500 font-bold transition-colors duration-300 flex items-center gap-1"
          >
            Live Demo <ArrowRight size={20} />
          </a>
        )}

        {project.mediumLink && (
          <a
            href={project.mediumLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-yellow-500 transition-colors duration-300"
          >
            <MediumIcon className="w-6 h-6" />
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-yellow-500 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
        )}
        {project.documentLink && (
          <a
            href={project.documentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-yellow-500 transition-colors duration-300"
          >
            <FileText size={24} />
          </a>
        )}
        {project.figmaLink && (
          <a
            href={project.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-yellow-500 transition-colors duration-300"
          >
            <Figma size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
