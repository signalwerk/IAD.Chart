import React from "react";
import Data from "./data";

import ThemeSignalwerk, {
  strokes,
  defaultFont,
  blockStyles,
  dimensions
} from "../theme";
import { VictoryLabel, VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class Headings extends React.Component {
  render() {
    let { width, height } = dimensions;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        style={{ pointerEvents: "all", width: "100%", height: "100%" }}
      >
        <VictoryChart
          width={width}
          height={height}
          padding={{ top: 50, left: 50, right: 50, bottom: 50 + 75 }}
          domainPadding={{ x: [0, 0] }}
          theme={ThemeSignalwerk}
          standalone={false}
        >
          <VictoryLabel
            x={55}
            y={420}
            style={blockStyles}
            lineHeight={(1.4 / 24) * 12}
            text={["■", "■", "■", "■"]}
          />
          <VictoryLabel
            x={80}
            y={420}
            lineHeight={1.4}
            style={{ fill: "black", fontSize: "12px", fontFamily: defaultFont }}
            text={[
              Data.noResponsive.title,
              Data.breakPoints.title,
              Data.linear.title,
              Data.scurve.title
            ]}
          />
          <VictoryAxis
            tickValues={[300, 500, 700, 900, 1100, 1300]}
            tickFormat={t => `${t} px`}
          />

          <VictoryAxis
            dependentAxis
            tickFormat={t => `${t} px`}
            tickValues={[10, 11, 12, 13, 14, 15, 16, 17]}
          />

          <VictoryLine
            style={{
              data: strokes[0]
            }}
            data={Data.noResponsive.fontSize.map((item, index) => ({
              y: item.value,
              x: item.width
            }))}
          />

          <VictoryLine
            style={{
              data: strokes[3]
            }}
            data={Data.scurve.fontSize.map((item, index) => ({
              y: item.value,
              x: item.width
            }))}
          />

          <VictoryLine
            style={{
              data: strokes[1]
            }}
            data={Data.breakPoints.fontSize.map((item, index) => ({
              y: item.value,
              x: item.width
            }))}
          />

          <VictoryLine
            style={{
              data: strokes[2]
            }}
            data={Data.linear.fontSize.map((item, index) => ({
              y: item.value,
              x: item.width
            }))}
          />
        </VictoryChart>
      </svg>
    );
  }
}
