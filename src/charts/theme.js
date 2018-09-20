// from
// https://raw.githubusercontent.com/FormidableLabs/victory-core/master/src/victory-theme/material.js

import { assign } from "lodash";

// *
// * Colors
// *
const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900
];
const blueGrey50 = "#ECEFF1";
const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const grey900 = "#212121";




// sh
const cGrey300 = "#969696";
const cGrey700 = "#455A64";
const cBlack = "#000000";


const cLabelFill = "#000000";
const cAxisLine = cGrey300;


// *
// * Typography
// *
const sansSerif = "'Open Sans', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 600,
  height: 600 / 3 * 2,
  padding: 50
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

const labelStyles = assign({
  textAnchor: "start"
}, baseLabelStyles);
// *
// * Strokes
// *
const strokeLinecap = "butt";
const strokeLinejoin = "round";

const defaultStyle = {
  area: assign({
    style: {
      data: {
        fill: grey900
      },
      labels: labelStyles
    }
  }, baseProps),
  axis: assign({
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
        textAnchor: "start",
      })
    }
  }, baseProps),

  independentAxis: {
    style: {
      grid: {
        // fill: "none",
        stroke: "transparent",
        // strokeDasharray: "2, 10",
        // strokeLinecap: "round",
        // strokeLinejoin,
        // pointerEvents: "visible"
      },
    }
  },
  dependentAxis: {
    style: {
      axis: {
        stroke: "transparent",
      },
      grid: {
        strokeDasharray: "0, 6",
        pointerEvents: "visible"
      },

      ticks: {
        size: 0,
        // strokeDasharray: "0, 4",
        strokeLinecap: "round",
        strokeLinejoin,
      },
      tickLabels: {
        textAnchor: "end",
      }
    },
  },
  bar: assign({
    style: {
      data: {
        fill: blueGrey700,
        padding,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: assign({
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
  }, baseProps),
  chart: baseProps,
  errorbar: assign({
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
  }, baseProps),
  group: assign({
    colorScale: colors
  }, baseProps),
  line: assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 3
      },
      labels: labelStyles
    }
  }, baseProps),
  pie: assign({
    colorScale: colors,
    style: {
      data: {
        padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, { padding: 20 })
    }
  }, baseProps),
  scatter: assign({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: labelStyles
    }
  }, baseProps),
  stack: assign({
    colorScale: colors
  }, baseProps),
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
  voronoi: assign({
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
  }, baseProps),
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

  axis: assign({
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
        textAnchor: "end",

      })
    }
  }, baseProps),
};


export var yAxis = assign({}, defaultStyle, _yAxis);

// export var defaultStyleYAxis = defaultStyleYAxis;
