import { FC } from "react";
import { portfolioData } from "../data/variables";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-bold">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;