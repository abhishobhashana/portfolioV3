import React from "react";
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
    <div
      className="grid lg:grid-cols-3 sm:grid-cols-1 lg:px-44 md:px-10 sm:px-10 lg:pt-32 md:p-10 sm:py-32 lg:gap-14 sm:gap-5"
      id="experience"
    >
      <div className="flex lg:col-auto md:col-span-2 sm:col-span-2 sm:justify-start lg:justify-end lg:pt-28 md:pt-32 sm:pt-0 gap-10">
        <h1 className="text-md leading-6 tracking-widest text-sky-400">
          {data.experience.experienceTitle.toUpperCase()}
        </h1>
      </div>
      <div className="flex lg:col-span-2 md:flex-col sm:flex-wrap lg:pt-28 p-5 lg:gap-14 sm:gap-10">
        {experiences.map((experience) => {
          return (
            <div className="lg:flex flex-col" key={experience.id}>
              <div className="lg:max-w-4xl flex lg:flex-row sm:flex-col lg:items-center lg:justify-between">
                <h1 className="text-lg leading-6 text-slate-200">
                  <a
                    href={experience.href}
                    target="_blank"
                    className="cursor-pointer text-slate-100 hover:border-b hover:border-slate-100"
                  >
                    {experience.name}
                  </a>
                </h1>
                <code className="text-sm text-slate-400">
                  {experience.year}
                </code>
              </div>
              <span className="text-sm text-slate-400">
                {experience.designation}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
