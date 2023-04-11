import React from "react";
import data from "../../Data/Data.json";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 p-5 gap-10">
      <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight pr-6 mr-6 border-r border-slate-500 text-slate-200">
          {data.notFound.nfCode}
        </h1>
        <h2 className="mt-2 text-lg text-slate-400 sm:mt-0">
          {data.notFound.nfMessage}
        </h2>
      </div>
      <button className="rounded-lg bg-blue-600 hover:bg-blue-700">
        <a href="/">{data.notFound.nfHome}</a>
      </button>
    </div>
  );
}
