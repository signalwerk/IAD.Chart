// http://ramdajs.com/docs/

export const IAD2017_S2 = [
  { CHF: 66400, gender: "m"},
  { CHF: 19500, gender: "m"},
  { CHF: 75000, gender: "m"},
  { CHF: 85000, gender: "f"},
  { CHF: 63700, gender: "f"},
  { CHF: 63375, gender: "m"},
  { CHF: 50538, gender: "f"},
  { CHF: 75000, gender: "m"},
  { CHF: 65000, gender: "f"},
  { CHF: 80000, gender: "f"},
  { CHF: 81250, gender: "f"},
  { CHF: 74750, gender: "m"},
  { CHF: 78000, gender: "m"},
];

export const clipBestWorst = (income) => {
  let returnArray = income.map(a => Object.assign({}, a));
  returnArray.sort(function(a, b) {
      return a.CHF - b.CHF;
  })

  // Removes first & last element
  return returnArray.slice(1, -1);
}


export const average = (income, filter) => {

  let data = income;

  if(filter) {
    data = data.filter(function(d) {
      return d.gender == filter;
    })
  }

  var sum = data.reduce(function(a, b) {
    return {CHF: a.CHF + b.CHF};
  });
  var avg = sum.CHF / data.length;

  return avg;
}
