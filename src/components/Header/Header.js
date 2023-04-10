import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HashLink as Link } from "react-router-hash-link";
import useScrollListener from "../../hooks/useScrollListener";
import data from "../../Data/Data.json";
import "./style.css";
import Logo from "../../Assets/icons/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [navClassList, setNavClassList] = React.useState([]);
  const scroll = useScrollListener();

  function openModal() {
    setIsOpen(true);
  }

  const navs = [
    {
      id: 0,
      name: data.about.aboutTitle,
      path: "/#about",
    },
    {
      id: 1,
      name: data.experience.experienceTitle,
      path: "/#experience",
    },
    {
      id: 2,
      name: data.projects.projectsTitle,
      path: "/#projects",
    },
    {
      id: 3,
      name: data.contact.contactTitle,
      path: "/#contact",
    },
  ];

  // update classList of nav on scroll
  React.useEffect(() => {
    const _classList = [];

    if (scroll.y > 100 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div
      className={`${navClassList.join(
        " "
      )} nav sticky sm:fixed top-0 z-40 w-full lg:py-5 lg:px-10 md:p-10 sm:p-7 flex justify-between items-center border-b border-slate-300/10 backdrop-blur flex-none transition-colors duration-500 border-slate-50/[0.06] bg-slate-900/75`}
    >
      <div className="md:flex md:w-full sm:flex sm:w-full">
        <div className="cursor-pointer" onClick={refresh}>
          <Logo height="1rem" width="1rem" />
        </div>
      </div>
      <div className="hidden lg:flex md:items-center gap-6 light-grey sm:items-center gap-4 light-grey">
        {navs.map((nav) => {
          return (
            <Link
              key={nav.id}
              smooth
              to={nav.path}
              className="text-sm cursor-pointer text-slate-400 hover:text-sky-500"
            >
              {nav.name}
            </Link>
          );
        })}
        <button className="font-mono text-sm bg-blue-600 hover:bg-blue-700 rounded-lg">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            {data.resume}
          </a>
        </button>
      </div>

      <button
        type="button"
        onClick={openModal}
        className="lg:hidden rounded-md bg-opacity-20 p-0 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none"
      >
        <div className="w-5 h-0.5 bg-gray-600 mb-1.5"></div>
        <div className="w-5 h-0.5 bg-gray-600"></div>
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          className="fixed top-4 right-4 z-40 w-full max-w-xs rounded-lg shadow-lg p-6 text-base font-semibold bg-slate-800 text-slate-400 highlight-white/5"
          onClose={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-0 backdrop-blur-sm bg-slate-900/80"
            aria-hidden="true"
          />
          <Transition.Child
            as={Fragment}
            enter="transition duration-200 ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="fixed top-4 right-4 w-full max-w-xs rounded-lg shadow-lg p-5 text-base font-semibold bg-slate-800 text-slate-400 highlight-white/5">
              <Dialog.Panel>
                <div className="flex flex-col w-full items-start justify-center gap-5">
                  <span
                    className="absolute top-4 right-5 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 text-slate-400 hover:text-slate-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      viewBox="0 0 10 10"
                      className="w-2.5 h-2.5 overflow-visible"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 0L10 10M10 0L0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                  {navs.map((nav) => {
                    return (
                      <Link
                        key={nav.id}
                        smooth
                        to={nav.path}
                        className="font-bold text-slate-400 hover:text-sky-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {nav.name}
                      </Link>
                    );
                  })}
                  <button className="font-bold font-mono text-sm bg-blue-600 hover:bg-blue-700 rounded-lg">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.resume}
                    </a>
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
