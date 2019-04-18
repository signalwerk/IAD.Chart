import React, { Component } from "react";
import "./App.css";

import Smartphonesale from "./charts/smartphonesale";
import Income from "./charts/income";
import Headings from "./charts/headings";
import Basefont from "./charts/Basefont";
import Bookproduction from "./charts/Bookproduction";
import SpeedOfInformation from "./charts/SpeedOfInformation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpeedOfInformation
log={true}
          />
        <SpeedOfInformation />
        <Bookproduction />
        <Bookproduction
log={true}
          />
        <br />
        <br />
        <br />
        <Basefont />
        <h2>Jahreseinkommen – HF2017</h2>
        <Income />
        <h2>Headings</h2>
        <h3>Vergleich</h3>

        <Headings />
        <h3>Zuwachs</h3>
        <Headings showDetail={true} />

        <h2>Verkäufe Smartphone</h2>
        <Smartphonesale />
      </div>
    );
  }
}

export default App;
