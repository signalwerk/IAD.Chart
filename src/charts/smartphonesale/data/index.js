import _ from "lodash";
import smartphoneQuarters from "./smartphone_quarters.json";
import smartphoneYears from "./smartphone_years.json";
import desktopYears from "./desktop_years.json";
import vendorYears from "./vendor_years.json";

const maxYear = 2016;

class Data {
  vendorDesktopShipment() {
    return _(vendorYears.shipments)
      .map(item => ({
        year: item.year,
        total:
          ((item.Lenovo || 0) +
          (item["HP Inc"] || 0) +
          (item.Dell || 0) +
          (item.Asus || 0) +
          (item.Apple || 0) +
          (item.Acer || 0) +
          (item.Toshiba || 0) +
          (item.Others || 0)) * 1000000
      }))
      .filter(item => item.year >= 2007) // 2009 is not complete
      .value();
  }

  desktopShipment() {
    var result = this.vendorDesktopShipment();

    // find first year we have detail data
    let lastYear = _.maxBy(result, item => item.year).year;

    // push rest data
    _(desktopYears.shipments)
      .filter(item => item.Year > lastYear)
      .forEach(item => {
        result.push({
          year: item.Year,
          total: (item.Laptops + item["Desktop-PCs"]) * 1000000
        });
      });

    return result;
  }

  smartphoneYears() {
    return _(this.smartphoneSalesByYear())
      .map("year")
      .uniq()
      .value();
  }

  smartphoneSalesByYear() {
    // sum by year
    var result = _(smartphoneQuarters.sales)
      .map("Year")
      .uniq()
      .filter(item => item > 2009) // 2009 is not complete
      .filter(item => item <= maxYear)
      .map(key => ({
        year: key,
        total: _(smartphoneQuarters.sales)
          .filter({ Year: key })
          .sumBy("total") * 1000000
      }))
      .value();

    // find first year we have detail data
    let firstYear = _.minBy(result, item => item.year).year;

    // push old data
    _(smartphoneYears.sales)
      .filter(item => item.year < firstYear)
      .forEach(item => {
        result.push({
          year: item.year,
          total: item.unitsInMio * 1000000
        });
      });

    return _.sortBy(result, ["year"]);
  }
}

var data = new Data();
export default data;
