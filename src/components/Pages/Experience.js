import React from "react";
import Section from "../Section/Section";
import data from "../../Data/Data.json";

export default function Experience() {
  const experiences = [
    {
      id: 0,
      name: data.experience.techFlitter,
      href: "https://www.thetfpl.com/",
      designation: data.experience.dev,
      year: "Feb 2022 - Present",
    },
    {
      id: 1,
      name: data.experience.novatrice,
      href: "https://www.novatrice.com/",
      designation: data.experience.dev,
      year: "Apr 2020 - Jan 2021",
    },
  ];
  return (
    <Section
      className="experience"
      id="experience"
      title={data.experience.experienceTitle}
    >
      {experiences.map((experience) => {
        return (
          <div key={experience.id}>
            <div className="lg:max-w-4xl flex lg:flex-row sm:flex-col lg:items-center lg:justify-between sm:gap-2">
              <h1 className="text-lg leading-6 text-slate-200">
                <a
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-link cursor-pointer text-slate-100"
                >
                  {experience.name}
                </a>
              </h1>
              <code className="text-sm text-slate-400">{experience.year}</code>
            </div>
            <span className="text-md text-slate-400">
              {experience.designation}
            </span>
          </div>
        );
      })}
    </Section>
  );
}
