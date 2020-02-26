import React from "react";
import Data from "./data";
import ThemeSignalwerk, { strokes, dimensions } from "../theme";
import { abbreviate } from "../../utility/abbreviateNumber";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class Smartphonesale extends React.Component {
  render() {
    let countTicks = [0, 1, 2, 4, 6, 8, 10, 12].map(
      item => item * 1000000000000
    );

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
          padding={{ top: 50, left: 60, right: 50, bottom: 50 + 75 }}
          domainPadding={{ x: [5, 30] }}
          theme={ThemeSignalwerk}
          standalone={false}
        >
          <VictoryAxis tickValues={[1926, 1940, 1960, 1980, 2001, 2018]} />

          <VictoryAxis
            dependentAxis
            tickValues={countTicks}
            tickFormat={t => `${abbreviate(t)}`}
          />

          <VictoryLine
            style={{
              data: strokes[0]
            }}
            data={Data.map(i => ({
              year: i.year,
              piecesInMio: i.piecesInMio * 100000000
            }))}
            x="year"
            y="piecesInMio"
          />
        </VictoryChart>
      </svg>
    );
  }
}
