import React from "react";
import Data from "./data";
import { assign } from "lodash";

import ThemeSignalwerk, { colors, strokes, defaultFont, labelStyles, blockStyles } from "../theme";
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
          padding={{ top: 50, left: 50, right: 80, bottom: 50 + 75 }}
          domainPadding={{ x: [30, 30] }}
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
              Data.W3C.title,
              Data.bootstrap.title,
              `${Data.foundation.title} – Desktop`,
              `${Data.foundation.title} – Mobile`
            ]}
          />
          <VictoryAxis
            tickValues={[6, 5, 4, 3, 2, 1]}
            invertAxis
            tickFormat={t => `H${t}`}
          />

          <VictoryAxis
            dependentAxis
            tickFormat={t => `${t} rem`}
            tickValues={[0, 0.5, 1, 1.5, 2, 2.5]}
            style={assign(
              {
                grid: assign(
                  { strokeDasharray: t => (t == 1 ? "none" : "0, 6") },

                  ThemeSignalwerk.dependentAxis.grid
                )
              },
              ThemeSignalwerk.dependentAxis
            )}
          />

          <VictoryLine
            style={{
              data: strokes[0]
            }}
            data={Data.W3C.fontSize.map((item, index) => ({
              y: item.value,
              x: item.order
            }))}
          />
          <VictoryLine
            style={{
              data: strokes[2]
            }}
            data={Data.bootstrap.fontSize.map((item, index) => ({
              y: item.value,
              x: item.order
            }))}
          />

          <VictoryLine
            style={{
              data: strokes[1]
            }}
            data={Data.foundation.fontSize.desktop.map((item, index) => ({
              y: item.value,
              x: item.order
            }))}
          />
          <VictoryLine
            style={{
              data: strokes[3]
            }}
            data={Data.foundation.fontSize.mobile.map((item, index) => ({
              y: item.value,
              x: item.order
            }))}
          />

          {showDetail && (
            <VictoryAxis
              orientation="right"
              dependentAxis
              tickFormat={t =>
                `${Math.round((t / percentageScale + cutOff) * 100)}%`
              }
              tickValues={[0.8, 1, 1.2, 1.3, 1.4, 1.5].map(
                i => (i - cutOff) * percentageScale
              )}
              offsetX={80}
              tickLabelComponent={<VictoryLabel dx={40} />}
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
                      : (1 / data[index - 1].value * item.value - cutOff) *
                        percentageScale,
                  x: item.order
                }))}
              />

              <VictoryBar
                standalone
                data={Data.bootstrap.fontSize
                  .reverse()
                  .map((item, index, data) => ({
                    y:
                      index === 0
                        ? 0
                        : (1 / data[index - 1].value * item.value - cutOff) *
                          percentageScale,
                    x: item.order
                  }))}
              />

              <VictoryBar
                standalone
                data={Data.foundation.fontSize.desktop
                  .reverse()
                  .map((item, index, data) => ({
                    y:
                      index === 0
                        ? 0
                        : (1 / data[index - 1].value * item.value - cutOff) *
                          percentageScale,
                    x: item.order
                  }))}
              />

              <VictoryBar
                standalone
                data={Data.foundation.fontSize.mobile
                  .reverse()
                  .map((item, index, data) => ({
                    y:
                      index === 0
                        ? 0
                        : (1 / data[index - 1].value * item.value - cutOff) *
                          percentageScale,
                    x: item.order
                  }))}
              />
            </VictoryGroup>
          )}
        </VictoryChart>
      </div>
    );
  }
}
