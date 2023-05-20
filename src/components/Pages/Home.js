import React from "react";
import data from "../../Data/Data.json";

export default function Home() {
  return (
    <div
      className="home flex flex-col justify-center pt-24 h-screen py-10 gap-6 sm:m-auto sm:pt-20 p-8"
      id="#"
    >
      <code className="font-medium text-sm text-sky-500">
        {data.home.greetings}
      </code>
      <h1 className="md:max-w-lg sm:w-full text-white lg:text-6xl md:text-6xl sm:text-4xl">
        {data.app}
      </h1>
      <p className="text-lg md:max-w-lg sm:w-full mx-auto text-slate-400">
        {data.home.intro}
      </p>
    </div>
  );
}
