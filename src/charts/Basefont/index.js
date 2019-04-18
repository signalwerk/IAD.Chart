import React from "react";
import Data from "./data";
import { assign } from "lodash";

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

let cutOff = 0.8;
let percentageScale = 1 / (1.5 - cutOff) * 2.5;

export default class Headings extends React.Component {
  render() {
    let showDetail = this.props.showDetail;
    return (
      <div>
        <VictoryChart
          height={400 + 75}
          padding={{ top: 50, left: 50, right: 50, bottom: 50 + 75 }}
          domainPadding={{ x: [0, 0] }}
          theme={ThemeSignalwerk}
        >
          <VictoryLabel
            x={55}
            y={420}
            style={blockStyles}
            lineHeight={1.4 / 24 * 12}
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
      </div>
    );
  }
}
