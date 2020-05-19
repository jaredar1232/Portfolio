import React from "react";

import TopFold from "../components/TopFold.jsx";
import AboutMe from "../components/AboutMe.jsx";

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
      </div>
    );
  }
}

export default App;
