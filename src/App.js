import React, { Component } from "react";
import "./App.css";

import Smartphonesale from "./charts/smartphonesale";
import Income from "./charts/income";
import Headings from "./charts/headings";
import Basefont from "./charts/Basefont";
import Bookproduction from "./charts/Bookproduction";
import Letters from "./charts/letters";
import SpeedOfInformation from "./charts/SpeedOfInformation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Briefpost in den USA</h2>
        <Letters />

        <h2>
          Informationsgeschwindigkeit auf dem Weg nach London im 19.
          Jahrhunderts
        </h2>
        <SpeedOfInformation />
        <h2>Buchproduktion</h2>
        <Bookproduction />
        <Bookproduction log={true} />
        <br />
        <br />
        <br />
        <h2>Abstufungen </h2>
        <Basefont />

        <h2>Jahreseinkommen – HF2019</h2>
        <Income filter="HF2019" />

        <h2>Jahreseinkommen – HF2017</h2>
        <Income filter="HF2017" />
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
