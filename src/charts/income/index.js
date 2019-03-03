import React from "react";
import ReactDOM from "react-dom";
import { assign, clone } from "lodash";
import {
  VictoryLine,
  VictoryLabel,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";
// import Theme from './theme.js';
import ThemeSignalwerk, { strokes, defaultFont, labelStyles } from "../theme";
import { IAD2017_S2 } from "./incomeHF2017_Semester2.js";
import { IAD2017_S4 } from "./incomeHF2017_Semester4.js";
import { clipBestWorst, average } from "./util.js";

let colorF = "#c43a31";
let colorM = "#2b517f";

// const Theme = VictoryTheme.material;

let renderChart = dataIn => {
  return (
    <div>
      <VictoryChart
        height={400 + 75}
        padding={{ top: 50, left: 50, right: 0, bottom: 50 + 75 }}
        domainPadding={{ x: [30, 75] }}
        theme={ThemeSignalwerk}
      >
        <VictoryAxis
          tickValues={dataIn.map((item, index) => index + 1)}
          tickFormat={y => dataIn[y - 1].caption}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={x => `${x / 1000} K`}
          tickValues={[64000, 66000, 68000, 70000, 72000, 74000]}
        />

        <VictoryLabel
          x={55}
          y={420}
          style={[
            { fontSize: "24px", fill: strokes[0].stroke },
            { fontSize: "24px", fill: strokes[4].stroke },
            { fontSize: "24px", fill: strokes[1].stroke }
          ]}
          lineHeight={1.4 / 24 * 12}
          text={`■\n■\n■`}
        />

        <VictoryLabel
          x={80}
          y={420}
          lineHeight={1.4}
          style={{ fill: "black", fontSize: "12px", fontFamily: defaultFont }}
          text={`Frauen\nDurchschnitt\nMänner`}
        />

        {/* Red annotation line */}
        <VictoryLine
          style={{
            data: { stroke: strokes[0].stroke },
            parent: { border: "1px solid #ccc" }
          }}
          data={dataIn.map((item, index) => {
            return { x: index + 1, y: average(item.data, "f") };
          })}
        />

        <VictoryLine
          style={{
            data: { stroke: strokes[4].stroke },
            parent: { border: "1px solid #ccc" }
          }}
          data={dataIn.map((item, index) => {
            return { x: index + 1, y: average(item.data) };
          })}
        />
        <VictoryLine
          style={{
            data: { stroke: strokes[1].stroke },
            parent: { border: "1px solid #ccc" }
          }}
          data={dataIn.map((item, index) => {
            return { x: index + 1, y: average(item.data, "m") };
          })}
        />
      </VictoryChart>

      <table>
        <thead>
          <tr>
            <th />
            <th style={{ color: strokes[0].stroke }}>Frauen</th>
            <th style={{ color: strokes[4].stroke }}>Durchschnitt</th>
            <th style={{ color: strokes[1].stroke }}>Männer</th>
          </tr>
        </thead>
        <tbody>
          {dataIn.map((item, index) => {
            // return { x: index + 1, y: average(item.data, "m") };

            return (
              <tr>
                <td>
                  <strong>{item.caption}</strong>
                </td>
                <td>CHF {Math.round(average(item.data, "m"))}.–</td>
                <td>CHF {Math.round(average(item.data, "f"))}.–</td>
                <td>CHF {Math.round(average(item.data))}.–</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default class Income extends React.Component {
  render() {
    let data = [IAD2017_S2, IAD2017_S4];

    let clipData = [];
    data.forEach(item => {
      let newItem = clone(item);
      newItem.data = clipBestWorst(newItem.data);
      clipData.push(newItem);
    });

    console.log(data);
    console.log(clipData);

    return (
      <div>
        <h3>Einkommen</h3>
        {renderChart(data)}
        <h3>Einkommen – bereinigt</h3>
        <p> Höchst- und Tiefstverdienende gestrichen</p>
        {renderChart(clipData)}
      </div>
    );
  }
}
