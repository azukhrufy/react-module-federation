import React , {Suspense} from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
import Header from "home/Header";

// sample of async load components //
// const Footer = React.lazy (() => import("home/Footer"));
// const Header = React.lazy (() => import("home/Header"));

import "./index.scss";

// safe component is for error handling if the component does'nt work properly
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    {/* <Suspense>
      <Header />
    </Suspense> */}
    <SafeComponent>
      <Header />
    </SafeComponent>
      <div className="my-10 mx-auto"> 
        PDP Page Content
      </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
