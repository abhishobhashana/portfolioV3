import React from "react";
import data from "../../Data/Data.json";
import Link from "../../Assets/icons/Link";

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: data.projects.reactTemplate,
      link: "https://www.github.com/abhiapaatel/react-template",
      details:
        "React-Template is easy to use, has all files having folder structure that makes it easily changeable.",
      tech: ["JavaScript", "React", "React Router", "Tailwind CSS"],
    },
    {
      id: 1,
      name: data.projects.pxToRem,
      link: "https://www.github.com/abhiapaatel/px-to-rem",
      details:
        "PX to REM Converter converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16px pixel.",
      tech: ["JavaScript", "React", "React Router", "Tailwind CSS"],
    },
  ];

  return (
    <div
      className="grid lg:grid-cols-3 sm:grid-cols-1 lg:px-44 md:px-10 sm:px-10 lg:pt-20 md:p-10 sm:py-32 lg:gap-14 sm:gap-5"
      id="projects"
    >
      <div className="flex lg:col-auto md:col-span-2 sm:col-span-2 sm:justify-start lg:justify-end lg:pt-28 md:pt-32 sm:pt-0 gap-10">
        <h1 className="text-md leading-6 tracking-widest text-sky-400">
          {data.projects.projectsTitle.toUpperCase()}
        </h1>
      </div>
      <div className="flex lg:col-span-2 md:flex-col sm:flex-wrap lg:pt-28 p-5 lg:gap-10 sm:gap-10">
        {projects.map((project) => {
          return (
            <div
              className="lg:flex flex-col lg:gap-3 sm:flex sm:gap-2"
              key={project.id}
            >
              <div className="lg:max-w-4xl flex flex-row items-center gap-5">
                <h1 className="text-md leading-6 text-slate-200">
                  {project.name}
                </h1>
                <a href={project.link} target="_blank">
                  <Link />
                </a>
              </div>
              <span className="text-sm text-slate-400">{project.details}</span>
              <code className="block text-xs text-slate-400">
                {project.tech.map((e, id) => (
                  <span
                    key={id}
                    className="inline-block p-1 mr-2 mt-2 rounded-md border border-slate-700"
                  >
                    {e}
                  </span>
                ))}
              </code>
            </div>
          );
        })}
      </div>
    </div>
  );
}
