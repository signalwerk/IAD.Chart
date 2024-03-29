import React from "react";
import Data from "./data";
import { assign } from "lodash";

import ThemeSignalwerk, {
  colors,
  strokes,
  defaultFont,
  blockStyles,
  dimensions,
} from "../theme";

import {
  VictoryBar,
  VictoryLabel,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
} from "victory";

let cutOff = 0.8;
let percentageScale = (1 / (1.5 - cutOff)) * 2.5;

export default class Headings extends React.Component {
  render() {
    let showDetail = this.props.showDetail;
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
          padding={{ top: 50, left: 50, right: 80, bottom: 50 + 75 }}
          domainPadding={{ x: [30, 30] }}
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
              Data.W3C.title,
              Data.bootstrap5.title,
              `${Data.foundation6.title} – Desktop`,
              `${Data.foundation6.title} – Mobile`,
            ]}
          />
          <VictoryAxis
            tickValues={[6, 5, 4, 3, 2, 1]}
            invertAxis
            tickFormat={(t) => `H${t}`}
          />

          {!showDetail && (
            <VictoryAxis
              dependentAxis
              tickFormat={(t) => `${t} rem`}
              tickValues={[0, 0.5, 1, 1.5, 2, 2.5, 3]}
              style={assign(
                {
                  grid: assign(
                    { strokeDasharray: (t) => (t === 1 ? "none" : "0, 6") },

                    ThemeSignalwerk.dependentAxis.grid
                  ),
                },
                ThemeSignalwerk.dependentAxis
              )}
            />
          )}

          {!showDetail && (
            <VictoryLine
              style={{
                data: strokes[0],
              }}
              data={Data.W3C.fontSize.map((item, index) => ({
                y: item.value,
                x: item.order,
              }))}
            />
          )}
          {!showDetail && (
            <VictoryLine
              style={{
                data: strokes[2],
              }}
              data={Data.bootstrap5.fontSize.map((item, index) => ({
                y: item.value,
                x: item.order,
              }))}
            />
          )}

          {!showDetail && (
            <VictoryLine
              style={{
                data: strokes[1],
              }}
              data={Data.foundation6.fontSize.desktop.map((item, index) => ({
                y: item.value,
                x: item.order,
              }))}
            />
          )}
          {!showDetail && (
            <VictoryLine
              style={{
                data: strokes[3],
              }}
              data={Data.foundation6.fontSize.mobile.map((item, index) => ({
                y: item.value,
                x: item.order,
              }))}
            />
          )}
          {showDetail && (
            <VictoryAxis
              dependentAxis
              tickFormat={(t) =>
                `${Math.round((t / percentageScale + cutOff) * 100)}%`
              }
              tickValues={[0.8, 1, 1.2, 1.3, 1.4, 1.5].map(
                (i) => (i - cutOff) * percentageScale
              )}
              style={assign(
                {
                  grid: assign(
                    { strokeDasharray: (t) => (t === 1 ? "none" : "0, 6") },

                    ThemeSignalwerk.dependentAxis.grid
                  ),
                },
                ThemeSignalwerk.dependentAxis
              )}
            />
          )}

          {showDetail && (
            <VictoryGroup
              offset={10}
              style={{ data: { width: 6 } }}
              colorScale={colors}
            >
              <VictoryBar
                standalone
                data={Data.W3C.fontSize.reverse().map((item, index, data) => ({
                  y:
                    index === 0
                      ? 0
                      : ((1 / data[index - 1].value) * item.value - cutOff) *
                        percentageScale,
                  x: item.order,
                }))}
              />

              <VictoryBar
                standalone
                data={Data.bootstrap5.fontSize
                  .reverse()
                  .map((item, index, data) => ({
                    y:
                      index === 0
                        ? 0
                        : ((1 / data[index - 1].value) * item.value - cutOff) *
                          percentageScale,
                    x: item.order,
                  }))}
              />

              <VictoryBar
                standalone
                data={Data.foundation6.fontSize.desktop
                  .reverse()
                  .map((item, index, data) => ({
                    y:
                      index === 0
                        ? 0
                        : ((1 / data[index - 1].value) * item.value - cutOff) *
                          percentageScale,
                    x: item.order,
                  }))}
              />

              <VictoryBar
                standalone
                data={Data.foundation6.fontSize.mobile
                  .reverse()
                  .map((item, index, data) => ({
                    y:
                      index === 0
                        ? 0
                        : ((1 / data[index - 1].value) * item.value - cutOff) *
                          percentageScale,
                    x: item.order,
                  }))}
              />
            </VictoryGroup>
          )}
        </VictoryChart>
      </svg>
    );
  }
}
