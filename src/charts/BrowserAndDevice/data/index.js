// var parse = require("csv-parser");
//
// var fs = require("fs");

const csv = require("csv-parser");
const fs = require("fs");
const results = [];

let csv2JSON = path => {
  const results = [];

  fs.createReadStream(`./out/${path}.csv`)
    .pipe(csv())
    .on("data", data => results.push(data))

    .on("end", () => {
      fs.writeFileSync(`./out/${path}.json`, JSON.stringify(results, null, 2));
    });
};

// let csv2JSON = path => {
//   let csv = fs.readFileSync(`./out/${path}.csv`);
//
//   fs.writeFileSync(`./out/${path}.json`, JSON.stringify(parse(csv), null, 2));
// };

csv2JSON("CH_mobile_introduction");
csv2JSON("ALL_mobile_introduction");
csv2JSON("ALL_browser");
csv2JSON("CH_browser");

// var gs = require("global-stats");
// var hyperquest = require("hyperquest");

// var JSON = require("JSONStream");
// var fs = require("fs");

// var now = "2018-12";
//
// // April 3, 2010 = iPad
// // June 29, 2007 = iPhone
//
// var gsConfig = {
//   stat: "comparison",
//   platforms: ["desktop", "tablet", "mobile"],
//   country: "CH",
//   start: "2008-12",
//   end: now
// };
//
// var url = gs(gsConfig);
//
// console.log(url);
// hyperquest(url)
//   .pipe(parse())
//   .pipe(JSON.stringify())
//   .pipe(fs.createWriteStream("./out/CH_mobile_introduction.json"));
//
// delete gsConfig.country;
// var url = gs(gsConfig);
//
// console.log(url);
// hyperquest(url)
//   .pipe(parse())
//   .pipe(JSON.stringify())
//   .pipe(fs.createWriteStream("./out/ALL_mobile_introduction.json"));
//
// gsConfig.stat = "browser";
// var url = gs(gsConfig);
//
// console.log(url);
// hyperquest(url)
//   .pipe(parse())
//   .pipe(JSON.stringify())
//   .pipe(fs.createWriteStream("./out/ALL_browser.json"));
//
// gsConfig.country = "CH";
// var url = gs(gsConfig);
//
// console.log(url);
// hyperquest(url)
//   .pipe(parse())
//   .pipe(JSON.stringify())
//   .pipe(fs.createWriteStream("./out/CH_browser.json"));
