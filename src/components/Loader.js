import React from "react";
import Logo from "../Assets/icons/Logo";

export default function Loader(props) {
  return (
    <div
      className={`${
        props.load ? "preloader" : "preloader-none"
      } h-screen flex flex-col items-center justify-center text-center bg-slate-900 px-4 p-5 gap-10`}
    >
      <div className="logo flex items-center">
        <Logo height="2rem" width="2rem" />
      </div>
    </div>
  );
}
