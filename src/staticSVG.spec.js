import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";

import Smartphonesale from "./charts/smartphonesale";
import { SSRincome } from "./charts/income";
import Headings from "./charts/headings";
import Basefont from "./charts/Basefont";
import Bookproduction from "./charts/Bookproduction";
import SpeedOfInformation from "./charts/SpeedOfInformation";

let exportSVG = [
  {
    cart: <SpeedOfInformation />,
    filename: "SpeedOfInformation_km"
  },

  {
    chart: <Bookproduction />,
    filename: "Bookproduction_linear"
  },

  {
    chart: <Bookproduction log={true} />,
    filename: "Bookproduction_log"
  },

  {
    chart: <Basefont />,
    filename: "Basefont"
  },

  {
    chart: <SSRincome />,
    filename: "IAD2017_income"
  },

  {
    chart: <Headings />,
    filename: "Headings"
  },

  {
    chart: <Headings showDetail={true} />,
    filename: "Headings_details"
  },

  {
    chart: <Smartphonesale />,
    filename: "SmartphoneSales"
  }
];
const StaticSVG = value => {
  console.log("--- SVG-Write --- start");

  exportSVG.forEach(item => {
    console.log(`  * ${item.filename}`);
    const result = ReactDOMServer.renderToStaticMarkup(item.chart);
    fs.writeFileSync(`./SVG/charts/${item.filename}.svg`, result);
  });

  console.log("--- SVG-Write --- end");
};

// export default StaticSVG;

it("write svg with a test... 🙈", () => {
  StaticSVG();
  expect(3).toEqual(3);
});
