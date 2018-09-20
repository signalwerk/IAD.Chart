var data = {
  labels: [],
  series: [
    [],
    []
  ]
};

// load the data
var jsonData = loadJSON("../data/smartphone.json");

// fill the data
jsonData.sale.forEach(function(item) {
  data.series[0].push({
    x: moment(item.year, "YYYY").toDate(),
    y: item.unitsInMio
  });
});


var jsonData = loadJSON("../data/smartphone_q.json");

var yearSale = {};

jsonData.sale.forEach(function(item) {
  if (yearSale[item.Year]) {
    yearSale[item.Year] += item.total
  } else {
    yearSale[item.Year] = item.total
  }
});

for (k in yearSale) {
  if(k > 2014) {
    data.series[0].push({
      x: moment(k, "YYYY").toDate(),
      y: yearSale[k]
    });
  }
}


var options =  {

  lineSmooth: Chartist.Interpolation.none(),

  showPoint: false,

  axisX: {
    type: Chartist.FixedScaleAxis,
    // divisor: 8,

    ticks: [
        moment("2007", "YYYY"),
        moment("2008", "YYYY"),
        moment("2009", "YYYY"),
        moment("2010", "YYYY"),
        moment("2011", "YYYY"),
        moment("2012", "YYYY"),
        moment("2013", "YYYY"),
        moment("2014", "YYYY"),
        moment("2015", "YYYY"),
        moment("2016", "YYYY")
    ],
    low: moment("2007", "YYYY").format('x'),
    high: moment("2017", "YYYY").format('x'),
    labelInterpolationFnc: function (value) {
      return moment(value).format('YYYY');
    }
  },

  axisY: {
    type: Chartist.FixedScaleAxis,
    // onlyInteger: true,
    low: 0,
    high: 1600,
    //divisor: 4,
    ticks: [0, 100, 200, 400, 600, 800, 1000, 1200, 1400, 1600]
  },
}


var chart = new Chartist.Line('.ct-chart', data, options);

// only littleGrid in y-Direction
chart.on('draw', littleGrid);

$(function() {
  // if finished
  $('.ct-chart').on('click', function(data) {
    saveSVG(".ct-chart", "smartphones.svg")
  });
});
