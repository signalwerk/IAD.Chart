// https://stackoverflow.com/questions/10599933/convert-long-number-into-abbreviated-string-in-javascript-with-a-special-shortn

// abrevate numbers >= 100000
export const abbreviate = (value, after) => {
  if (value <= (after || 100000)) {
    return value.toString();
  }

  return abbreviateNumber(value);
};

export const abbreviateNumber = value => {
  if (value <= 1000) {
    return value.toString();
  }

  const numDigits = ("" + value).length;
  let suffixIndex = Math.floor(numDigits / 3);

  let normalisedValue = value / Math.pow(1000, suffixIndex);


  const suffixes = ["", " k", " Mio.", " Mia.", " Bio."];

  let adjustedValue = "" + normalisedValue;

  if (adjustedValue.charAt(0) === "0") {
    return adjustedValue * 1000 + suffixes[suffixIndex - 1];
  } else {
    return adjustedValue + suffixes[suffixIndex];
  }
};
