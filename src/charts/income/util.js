export const median = (income, filter) => {
  let data = income;

  if (filter) {
    data = data.filter(function (d) {
      return d.gender === filter;
    });
  }

  const arr = data.map((item) => item.CHF);

  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

export const average = (income, filter) => {
  let data = income;

  if (filter) {
    data = data.filter(function (d) {
      return d.gender === filter;
    });
  }

  var sum = data.reduce(function (a, b) {
    return { CHF: a.CHF + b.CHF };
  });
  var avg = sum.CHF / data.length;

  return avg;
};
