import React from "react";
import Bookproduction from "./data";
import { assign } from "lodash";
import { abbreviate } from "../../utility/abbreviateNumber";

import ThemeSignalwerk, {
  colors,
  strokes,
  defaultFont,
  labelStyles,
  blockStyles
} from "../theme";
import { yAxis } from "../theme";
import {
  VictoryBar,
  VictoryContainer,
  VictoryLabel,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryGroup
} from "victory";

export default class Basefont extends React.Component {
  render() {
    let log = this.props.log;

    let countTicks = [];

    if (log) {
      countTicks = Array.from({ length: 9 }, (item, index) =>
        Math.pow(10, index + 1)
      );
    } else {
      countTicks = Array.from(
        { length: 11 },
        (item, index) => index * 100000000
      );
    }

    return (
      <div>
        <VictoryChart
          height={400 + 75}
          padding={{ top: 50, left: 60, right: 50, bottom: 50 + 75 }}
          domainPadding={{ x: [0, 30] }}
          theme={ThemeSignalwerk}
          scale={{ x: "linear", y: log ? "log" : "linear" }}
        >
          <VictoryLabel
            x={55}
            y={420}
            style={blockStyles}
            lineHeight={(1.4 / 24) * 12}
            text={["■", "■"]}
          />
          <VictoryLabel
            x={80}
            y={420}
            lineHeight={1.4}
            style={{ fill: "black", fontSize: "12px", fontFamily: defaultFont }}
            text={["Manuskripte (geschrieben)", "Bücher (gedruckt)"]}
          />
          <VictoryAxis
            tickValues={Array.from({ length: 13 }, (item, index) => index + 6)}
            tickFormat={t => `${t} Jh.`}
          />

          <VictoryAxis
            dependentAxis
            tickValues={countTicks}
            tickFormat={t => `${abbreviate(t)}`}
          />

          <VictoryLine
            style={{
              data: strokes[0]
            }}
            data={Bookproduction.data.map((item, index) => ({
              x: item.century,
              y: item.manuscripts || 1
            }))}
          />

          <VictoryLine
            style={{
              data: strokes[1]
            }}
            data={Bookproduction.data.map((item, index) => ({
              x: item.century,
              y: item.books || 1
            }))}
          />
        </VictoryChart>
      </div>
    );
  }
}
