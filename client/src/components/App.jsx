import React from "react";

import TopFold from "../components/TopFold.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import Resume from "../components/Resume.jsx";
import Contact from "../components/ContactMe.jsx";
import Footer from "../components/Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // bind stuff
  }

  render() {
    // const elem = document.getElementsByClassName("loader");
    // elem.remove();

    return (
      <div>
        <TopFold />
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
