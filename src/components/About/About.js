import React from "react";
import data from "../../Data/Data.json";

export default function About() {
  const skills = [
    "JavaScript (ES6)",
    "TypeScript",
    "React",
    "Redux",
    "JQuery",
    "HTML",
    "CSS/Sass",
    "Git",
    "Figma",
    "Sketch",
  ];
  return (
    <div
      className="grid lg:grid-cols-3 m-auto lg:pt-5 lg:px-52 sm:px-10 md:p-10 sm:py-32 lg:gap-14 sm:gap-5"
      id="about"
    >
      <div className="flex justify-end lg:pt-28 md:pt-32 sm:pt-0">
        <h1 className="text-md leading-6 tracking-widest text-sky-400">
          {data.about.background.toUpperCase()}
        </h1>
      </div>
      <div className="col-span-2 flex justify-start flex-col w-full lg:pt-28 sm:pt-5 gap-5 sm:pl-6">
        <div className="flex flex-col gap-5 text-md leading-6 text-slate-400">
          <p>
            {data.about.detailIntro}{" "}
            <a
              href="https://www.thetfpl.com/"
              target="_blank"
              className="cursor-pointer text-slate-100 hover:border-b hover:border-slate-100"
            >
              {data.experience.techFlitter}
            </a>{" "}
            {data.about.detail}
          </p>
          <p>{data.about.detailSecond}</p>
          <p>{data.about.skills}</p>
        </div>
        <ul className="skills-list grid grid-rows-5 grid-flow-col">
          {skills.map((skill, id) => {
            return (
              <li
                key={id}
                className="font-mono before:content-['▹'] relative before:mr-2 text-sm text-slate-400 leading-loose"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
