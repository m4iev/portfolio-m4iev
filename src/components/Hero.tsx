import { FC } from "react";
import { portfolioData } from "../data/variables";
import NeoButton from "./NeoButton";

const Hero: FC = () => {
  return (
    <section className="bg-lime-50 border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-32 text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-4">
            {portfolioData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-black font-bold mb-6 bg-yellow-300 inline-block p-2 border-2 border-black">
            {portfolioData.title}
          </p>
          <p className="max-w-2xl text-lg text-gray-800 mb-8">
            {portfolioData.bio}
          </p>
          <NeoButton href="#contact">Get In Touch</NeoButton>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 bg-yellow-300 border-4 border-black flex items-center justify-center shadow-[12px_12px_0px_#000]">
          <img
            src={`https://placehold.co/256x256/1a1a1a/fde047?text=${portfolioData.name.slice(
              0,
              2
            )}`}
            alt="Your Name Initials"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
