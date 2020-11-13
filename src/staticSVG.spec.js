import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";

import Smartphonesale from "./charts/smartphonesale";
import { SSRincome } from "./charts/income";
import Headings from "./charts/headings";
import Basefont from "./charts/Basefont";
import Bookproduction from "./charts/Bookproduction";
import Letters from "./charts/letters";
import SpeedOfInformation from "./charts/SpeedOfInformation";

let exportSVG = [
  {
    chart: <SpeedOfInformation />,
    filename: "SpeedOfInformation_km",
  },

  {
    chart: <Letters />,
    filename: "letters_usa",
  },
  {
    chart: <Bookproduction />,
    filename: "Bookproduction_linear",
  },

  {
    chart: <Bookproduction log={true} />,
    filename: "Bookproduction_log",
  },

  {
    chart: <Basefont />,
    filename: "Basefont",
  },

  {
    chart: <SSRincome filter="HF2017" median={false} />,
    filename: "IAD2017_income",
  },

  {
    chart: <SSRincome filter="HF2017" median={true} />,
    filename: "IAD2017_income_median",
  },
  {
    chart: <SSRincome filter="HF2019" median={false} />,
    filename: "IAD2019_income",
  },
  {
    chart: <SSRincome filter="HF2019" median={true} />,
    filename: "IAD2019_income_median",
  },
  {
    chart: <Headings />,
    filename: "Headings",
  },

  {
    chart: <Headings showDetail={true} />,
    filename: "Headings_details",
  },

  {
    chart: <Smartphonesale />,
    filename: "SmartphoneSales",
  },
];
const StaticSVG = (value) => {
  console.log("--- SVG-Write --- start");

  exportSVG.forEach((item) => {
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
