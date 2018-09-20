import React from "react";
import Data from "./data";
import { assign } from "lodash";

import ThemeSignalwerk, { strokes, defaultFont, labelStyles } from "../theme";
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

export default class Smartphonesale extends React.Component {
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
            style={[
              { fontSize: "24px", fill: strokes[0].stroke },
              { fontSize: "24px", fill: strokes[2].stroke },
              { fontSize: "24px", fill: strokes[1].stroke },
              { fontSize: "24px", fill: strokes[3].stroke }
            ]}
            lineHeight={1.4 / 24 * 12}
            text={`■\n■\n■\n■`}
          />
          <VictoryLabel
            x={80}
            y={420}
            lineHeight={1.4}
            style={{ fill: "black", fontSize: "12px", fontFamily: defaultFont }}
            text={`${Data.W3C.title}\n${Data.bootstrap.title}\n${
              Data.foundation.title
            } – Desktop\n${Data.foundation.title} – Mobile`}
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
              colorScale={[
                strokes[0].stroke,
                strokes[2].stroke,
                strokes[1].stroke,
                strokes[3].stroke
              ]}
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
