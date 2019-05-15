// from
// https://raw.githubusercontent.com/FormidableLabs/victory-core/master/src/victory-theme/material.js

import { assign } from "lodash";

// *
// * Colors
// *

const colorA = "#d73027";
const colorB = "#4575b4";
const colorC = "#fc8d59";
const colorD = "#91bfdb";
const colorE = "#fee090";
const colorF = "#ff00ff";

const blueGrey50 = "#ECEFF1";
const blueGrey700 = "#455A64";
const grey900 = "#212121";

let colors = [colorA, colorB, colorC, colorD, colorE, colorF];

// sh
const strokes = [
  { stroke: colorA, strokeWidth: "0.2rem" },
  { stroke: colorB, strokeWidth: "0.2rem" },
  { stroke: colorC, strokeWidth: "0.2rem" },
  { stroke: colorD, strokeWidth: "0.2rem" },
  { stroke: colorE, strokeWidth: "0.2rem" },
  { stroke: colorF, strokeWidth: "0.2rem" }
];

// const strokesPrint = [
//   { stroke: "black" },
//   { stroke: "black", strokeDasharray: "8,7" },
//   { stroke: "black", strokeDasharray: "0.01,8" },
//   { stroke: "black" },
//   { stroke: "black", strokeDasharray: "0.01,3" }
// ];

export { strokes };

const cGrey300 = "#969696";
const cBlack = "#000000";

const cLabelFill = "#000000";
const cAxisLine = cGrey300;

// *
// * Typography
// *
const sansSerif = "'Open Sans', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 12;

const defaultFont = sansSerif;
export { defaultFont, colors };

// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 600,
  height: (600 / 3) * 2,
  padding: 50,
  colorScale: colors
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: cLabelFill,
  stroke: "transparent",
  strokeWidth: 0
};

const labelStyles = assign(
  {
    textAnchor: "start"
  },
  baseLabelStyles
);

const blockStyles = colors.map(item =>
  Object.assign({
    fontSize: "24px",
    fill: item
  })
);

// const blockStyles = [
//   assign(
//     baseLabelStyles,
//     {
//       fontSize: "24px",
//       fill: colorA
//     },
//   ),
//   assign(
//     baseLabelStyles,
//     {
//       fontSize: "24px",
//       fill: colorB
//     },
//   ),
//   assign(
//     {
//       fontSize: "24px",
//       fill: colorC
//     },
//   ),
//   assign(
//     {
//       fontSize: "24px",
//       fill: colorD
//     },
//   ),
//
//   assign(
//     {
//       fontSize: "24px",
//       fill: colorE
//     },
//   ),
//   assign(
//     {
//       fontSize: "24px",
//       fill: colorF
//     },
//   ),
//
//
// ];

export { labelStyles, blockStyles };
// *
// * Strokes
// *
const strokeLinecap = "butt";
const strokeLinejoin = "round";

const defaultStyle = {
  area: assign(
    {
      style: {
        data: {
          fill: grey900
        },
        labels: labelStyles
      }
    },
    baseProps
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: cBlack,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        axisLabel: assign({}, labelStyles, {
          padding,
          stroke: "transparent"
        }),
        grid: {
          fill: "none",
          stroke: cBlack,
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin,
          pointerEvents: "visible"
        },
        ticks: {
          fill: "transparent",
          stroke: cBlack,
          size: 5,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        tickLabels: assign({}, labelStyles, {
          textAnchor: "start"
        })
      }
    },
    baseProps
  ),

  independentAxis: {
    style: {
      grid: {
        // fill: "none",
        stroke: "transparent"
        // strokeDasharray: "2, 10",
        // strokeLinecap: "round",
        // strokeLinejoin,
        // pointerEvents: "visible"
      }
    }
  },
  dependentAxis: {
    style: {
      axis: {
        stroke: "transparent"
      },
      grid: {
        strokeDasharray: "0, 6",
        pointerEvents: "visible"
      },

      ticks: {
        size: 0,
        // strokeDasharray: "0, 4",
        strokeLinecap: "round",
        strokeLinejoin
      },
      tickLabels: {
        textAnchor: "end"
      }
    }
  },
  bar: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  candlestick: assign(
    {
      style: {
        data: {
          stroke: blueGrey700
        },
        labels: labelStyles
      },
      candleColors: {
        positive: "#ffffff",
        negative: blueGrey700
      }
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2
        },
        labels: labelStyles
      }
    },
    baseProps
  ),
  group: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  line: assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 3
        },
        labels: labelStyles
      }
    },
    baseProps
  ),
  pie: assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding,
          stroke: blueGrey50,
          strokeWidth: 1
        },
        labels: assign({}, baseLabelStyles, { padding: 20 })
      }
    },
    baseProps
  ),
  scatter: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          opacity: 1,
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: labelStyles
      }
    },
    baseProps
  ),
  stack: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  tooltip: {
    style: assign({}, labelStyles, { padding: 5, pointerEvents: "none" }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: assign({}, labelStyles, { padding: 5, pointerEvents: "none" }),
        flyout: {
          stroke: grey900,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none"
        }
      }
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  }
};

export default defaultStyle;

const _yAxis = {
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: cAxisLine,
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin
        },
        tickLabels: assign({}, labelStyles, {
          fill: blueGrey700,
          textAnchor: "end"
        })
      }
    },
    baseProps
  )
};

export const dimensions = {
  width: 600,
  height: 475
};

export var yAxis = assign({}, defaultStyle, _yAxis);

// export var defaultStyleYAxis = defaultStyleYAxis;
