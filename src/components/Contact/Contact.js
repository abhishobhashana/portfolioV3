import React from "react";
import data from "../../Data/Data.json";
import Github from "../../Assets/icons/Github";
import Mail from "../../Assets/icons/Mail";

export default function Contact() {
  return (
    <div
      className="flex lg:px-10 sm:px-9 lg:gap-14 sm:gap-5 lg:pt-32 md:px-9 md:py-10 sm:py-5"
      id="contact"
    >
      <div className="w-full flex flex-col pt-0 lg:pl-0 sm:pl-0 gap-5 sm:gap-2">
        <div className="sm:justify-start lg:pt-10 md:pt-28 sm:pt-0">
          <h1 className="text-md leading-6 tracking-widest text-sky-400">
            {data.contact.contactTitle.toUpperCase()}
          </h1>
        </div>

        <div className="w-full flex lg:flex-row md:flex-row sm:flex-col lg:justify-between lg:items-center md:justify-between md:items-center lg:pt-0 md:pt-0 sm:pt-3 lg:pl-8 sm:pl-5 gap-5 sm:gap-2">
          <div>
            <h1 className="sm:mt-5 text-md leading-6 tracking-widest text-slate-200">
              {data.contact.content}
            </h1>
            <p className="mt-2 text-md text-slate-400">{data.app}</p>
          </div>

          <div className="flex lg:gap-10 md:gap-10 justify-between items-center sm:py-5 sm:pr-8">
            <a href="https://www.github.com/abhiapatel">
              <Github />
            </a>
            <a href="mailto:abhiashobhashana@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
