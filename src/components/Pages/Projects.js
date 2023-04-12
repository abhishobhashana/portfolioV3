import React from "react";
import data from "../../Data/Data.json";
import Section from "../Section/Section";

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: data.projects.reactTemplate,
      link: "https://www.github.com/abhiapatel/react-template",
      details:
        "React-Template is easy to use, has all files having folder structure that makes it easily changeable.",
      tech: ["JavaScript", "React", "React Router", "Tailwind CSS"],
    },
    {
      id: 1,
      name: data.projects.pxToRem,
      link: "https://www.github.com/abhiapatel/px-to-rem",
      details:
        "PX to REM Converter converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16px pixel.",
      tech: ["JavaScript", "React", "React Router", "Tailwind CSS"],
    },
  ];

  return (
    <Section className="projects" id="projects" title={data.projects.projectsTitle}>
      <div className="flex flex-col gap-10 text-md leading-6 text-slate-400">
        {projects.map((project) => {
          return (
            <div
              className="lg:flex flex-col lg:gap-3 sm:flex sm:gap-2"
              key={project.id}
            >
              <div className="lg:max-w-4xl flex flex-row items-center gap-5">
                <h1 className="text-lg leading-6 text-slate-200">
                  <a
                    className="underline-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                </h1>
              </div>
              <span className="text-md text-slate-400">{project.details}</span>
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
    </Section>
  );
}
