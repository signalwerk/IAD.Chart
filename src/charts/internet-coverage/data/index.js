const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

const results = [];

fs.createReadStream(path.resolve(__dirname, "./population/population.csv"))
  .pipe(
    csv({
      skipLines: 4
      // mapHeaders: ({ header, index }) => {
      //   console.log("-----", { header, index });
      //   return header.toLowerCase();
      // }
    })
  )

  .on("data", data => results.push(data))
  .on("end", () => {
    let years = _.range(1960, 2018);

    // reduce population
    let population = years.map(year => ({
      year,
      population: results.reduce((accumulator, currentValue) => {
        let val = parseInt(currentValue[year]);
        if (val) {
          return accumulator + val;
        }
        return accumulator;
      }, 0)
    }));

    fs.writeFileSync(
      path.resolve(__dirname, "./population.json"),
      JSON.stringify(population, null, 2)
    );
  });
