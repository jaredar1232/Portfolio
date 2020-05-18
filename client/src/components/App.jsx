import React from "react";

import TopFold from "../components/TopFold.jsx";

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
      </div>
    );
  }
}

export default App;
