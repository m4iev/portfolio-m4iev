import { FC, ReactNode } from "react";

const Section: FC<{
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}> = ({ id, title, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-b-4 border-black ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-12 inline-block">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
