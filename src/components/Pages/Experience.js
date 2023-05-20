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
      desc: "Write modern, performant and robust code for a diverse array of client and internal projects, Work with a variety of different languages, frameworks and content management systems such as JavaScript, TypeScript and React, Worked with a team of 5 members and provided end-to-end solutions for clients",
      year: "Feb 2022 — Present",
    },
    {
      id: 1,
      name: data.experience.selfEmployed,
      href: "https://www.novatrice.com/",
      desc: "Rendered technical expertise in Software Development Life Cycle to develop applications based on specific client requirements, Designed assessment forms for different customers that reduces processing time by 20%.",
      designation: data.experience.dev,
      year: "Apr 2020 — Jan 2021",
    },
    {
      id: 2,
      name: data.experience.novatrice,
      href: "https://www.novatrice.com/",
      desc: "Worked with a team of three designers to build a marketing website and ecommerce platform for government, Interfaced with clients on a weekly basis, providing technological expertise and knowledge, Debugged and troubleshoot code related errors to ensure application remained 70% bug free",
      designation: data.experience.frontDev,
      year: "Apr 2020 — Jan 2021",
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
          <div
            className="p-6 bg-[#112240] shadow-lg rounded-lg"
            key={experience.id}
          >
            <div className="lg:max-w-4xl flex lg:flex-row sm:flex-col lg:items-center lg:justify-between sm:gap-2">
              <h1 className="text-lg leading-6 text-slate-200">
                <a
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-link cursor-pointer text-xl text-slate-100"
                >
                  {experience.name}
                </a>
              </h1>
              <code className="text-sm text-slate-400">{experience.year}</code>
            </div>
            <div className="mt-1">
              <span className="text-md text-slate-300">
                {experience.designation}
              </span>
            </div>
            <div className="mt-4">
              <span className="text-md text-slate-400">{experience.desc}</span>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
