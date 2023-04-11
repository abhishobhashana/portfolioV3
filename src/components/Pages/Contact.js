import React from "react";
import Section from "../Section/Section";
import data from "../../Data/Data.json";
import Github from "../../Assets/icons/Github";
import Mail from "../../Assets/icons/Mail";

export default function Contact() {
  return (
    <Section id="contact" contactSection title={data.contact.contactTitle}>
      <div className="flex lg:flex-row md:flex-col sm:flex-col lg:justify-between lg:items-center gap-5 text-md leading-6 text-slate-400">
        <div>
          <h1 className="text-lg leading-6 text-slate-200">
            {data.contact.content}
          </h1>
          <p className="mt-2 text-slate-400">{data.app}</p>
        </div>

        <div className="flex lg:gap-10 md:gap-10 justify-between items-center">
          <a href="https://www.github.com/abhiapatel">
            <Github />
          </a>
          <a href="mailto:abhiashobhashana@gmail.com">
            <Mail />
          </a>
        </div>
      </div>
    </Section>
  );
}
