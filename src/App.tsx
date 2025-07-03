import { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <div className="bg-lime-50 font-mono text-black antialiased">
      {/* Animation Styles */}
      <style>
        {`
                    @keyframes scroll-left {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                    .animate-scroll-left {
                        animation: scroll-left 15s linear infinite;
                    }
                    .group:hover .animate-scroll-left {
                        animation-play-state: paused;
                    }
                `}
      </style>

      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
