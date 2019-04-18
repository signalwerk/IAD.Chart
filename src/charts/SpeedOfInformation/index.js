import React from "react";
import SpeedOfInformation from "./data";
import ThemeSignalwerk, {
  colors,
  strokes,
  defaultFont,
  labelStyles,
  blockStyles
} from "../theme";
import { yAxis } from "../theme";
import { abbreviate } from "../../utility/abbreviateNumber";
import {
  VictoryBar,
  VictoryContainer,
  VictoryLabel,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";

export default class Smartphonesale extends React.Component {
  render() {
    let log = this.props.log;
    let countTicks = [];

    if (log) {
      countTicks = [1, 3, 5,  50, 100, 200, 400]
    } else {
      countTicks = [0, 15, 100, 200, 300, 400]
    }
    return (
      <div>
        <VictoryChart
          height={400 + 75}
          padding={{ top: 50, left: 60, right: 50, bottom: 50 + 75 }}
          domainPadding={{ x: [5, 30] }}
          theme={ThemeSignalwerk}
          scale={{ x: "linear", y: log ? "log" : "linear" }}

        >
          <VictoryLabel
            x={55}
            y={420}
            style={blockStyles}
            lineHeight={(1.4 / 24) * 12}
            text={["■"]}
          />
          <VictoryLabel
            x={80}
            y={420}
            lineHeight={1.4}
            style={{ fill: "black", fontSize: "12px", fontFamily: defaultFont }}
            text={[
              "Informationsgeschwindigkeit auf dem Weg nach London im 19. Jahrhundert"
            ]}
          />

          <VictoryAxis
            tickValues={[1790, 1800, 1820, 1840, 1860, 1880, 1890]}
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
      </div>
    );
  }
}
