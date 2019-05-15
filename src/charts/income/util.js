export const clipBestWorst = income => {
  let returnArray = income.map(a => Object.assign({}, a));
  returnArray.sort(function(a, b) {
    return a.CHF - b.CHF;
  });

  // Removes first & last element
  return returnArray.slice(1, -1);
};

export const average = (income, filter) => {
  let data = income;

  if (filter) {
    data = data.filter(function(d) {
      return d.gender === filter;
    });
  }

  var sum = data.reduce(function(a, b) {
    return { CHF: a.CHF + b.CHF };
  });
  var avg = sum.CHF / data.length;

  return avg;
};
