import React from "react";
import SpeedOfInformation from "./data";
import ThemeSignalwerk, { strokes, dimensions } from "../theme";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class Smartphonesale extends React.Component {
  render() {
    let countTicks = [0, 15, 100, 200, 300, 400];

    let { width, height } = dimensions;
    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ pointerEvents: "all", width: "100%", height: "100%" }}
      >
        <VictoryChart
          width={width}
          height={height}
          padding={{ top: 50, left: 60, right: 50, bottom: 50 + 75 }}
          domainPadding={{ x: [5, 30] }}
          theme={ThemeSignalwerk}
          scale={{ x: "linear", y: "linear" }}
          standalone={false}
        >
          <VictoryAxis
            tickValues={[1790, 1800, 1820, 1840, 1860, 1880, 1900]}
          />

          <VictoryAxis
            dependentAxis
            tickValues={countTicks}
            tickFormat={t => `${t} km/h`}
          />

          <VictoryLine
            style={{
              data: strokes[0]
            }}
            data={SpeedOfInformation.data.map((item, index) => ({
              x: item.year,
              y: item.speedKmH
            }))}
          />
        </VictoryChart>
      </svg>
    );
  }
}
