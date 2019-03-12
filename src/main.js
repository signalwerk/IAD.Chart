import React from "react";
import ReactDOM from "react-dom";

import Smartphonesale from "./charts/smartphonesale";
import Income from "./charts/income";
import Headings from "./charts/headings";

class Main extends React.Component {
  render() {
    return (
      <div style={{ width: "600px", margin: "0 auto" }}>
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

const app = document.getElementById("app");
ReactDOM.render(<Main />, app);
