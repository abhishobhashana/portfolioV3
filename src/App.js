import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Header,
  Home,
  About,
  Experience,
  Projects,
  Contact,
  Loader,
} from "./components";
import { Helmet } from "react-helmet";
import data from "./Data/Data.json";

function App() {
  const [load, upadateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {load ? <Loader load={load} /> : null}
      <div
        className={`${
          load ? "no-scroll" : "scroll"
        } App flex flex-col h-full bg-slate-900 gap-5`}
      >
        <BrowserRouter>
          <Helmet>
            <title>{data.app}</title>
            <meta name="description" content={data.home.intro}></meta>
          </Helmet>
          <Header />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
