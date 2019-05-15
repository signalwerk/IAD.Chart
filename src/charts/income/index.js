import React from "react";
import { clone } from "lodash";
import { VictoryLine, VictoryLabel, VictoryChart, VictoryAxis } from "victory";
// import Theme from './theme.js';
import ThemeSignalwerk, {
  colors,
  strokes,
  labelStyles,
  blockStyles,
  dimensions
} from "../theme";
import { IAD2017_S2 } from "./incomeHF2017_Semester2.js";
import { IAD2017_S4 } from "./incomeHF2017_Semester4.js";
import { clipBestWorst, average } from "./util.js";

// const Theme = VictoryTheme.material;

let renderTab = dataIn => {
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th style={{ color: colors[0] }}>Frauen</th>
          <th style={{ color: colors[1] }}>Durchschnitt</th>
          <th style={{ color: colors[2] }}>Männer</th>
        </tr>
      </thead>
      <tbody>
        {dataIn.map((item, index) => {
          // return { x: index + 1, y: average(item.data, "m") };

          return (
            <tr key={index}>
              <td>
                <strong>{item.caption}</strong>
              </td>
              <td>CHF {Math.round(average(item.data, "f"))}.–</td>
              <td>CHF {Math.round(average(item.data))}.–</td>
              <td>CHF {Math.round(average(item.data, "m"))}.–</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

let renderChart = dataIn => {
  let { width, height } = dimensions;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ pointerEvents: "all", width: "100%", height: "100%" }}
    >
      <VictoryChart
        width={width}
        height={height}
        padding={{ top: 50, left: 50, right: 0, bottom: 50 + 75 }}
        domainPadding={{ x: [30, 75] }}
        theme={ThemeSignalwerk}
        standalone={false}
      >
        <VictoryAxis
          tickValues={dataIn.map((item, index) => index + 1)}
          tickFormat={y => dataIn[y - 1].caption}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={x => `${x / 1000} K`}
          tickValues={[62000, 64000, 66000, 68000, 70000, 72000, 74000]}
        />

        <VictoryLabel
          x={55}
          y={420}
          style={blockStyles}
          lineHeight={(1.4 / 24) * 12}
          text={["■", "■", "■"]}
        />

        <VictoryLabel
          x={80}
          y={420}
          lineHeight={1.4}
          style={labelStyles}
          text={["Frauen", "Durchschnitt", "Männer"]}
        />

        {/* Red annotation line */}
        <VictoryLine
          style={{
            data: strokes[0]
          }}
          data={dataIn.map((item, index) => {
            return { x: index + 1, y: average(item.data, "f") };
          })}
        />

        <VictoryLine
          style={{
            data: strokes[1]
          }}
          data={dataIn.map((item, index) => {
            return { x: index + 1, y: average(item.data) };
          })}
        />
        <VictoryLine
          style={{
            data: strokes[2]
          }}
          data={dataIn.map((item, index) => {
            return { x: index + 1, y: average(item.data, "m") };
          })}
        />
      </VictoryChart>
    </svg>
  );
};

class sIncome extends React.Component {
  render() {
    let data = [IAD2017_S2, IAD2017_S4];

    return renderChart(data);
  }
}

export { sIncome as SSRincome };

export default class Income extends React.Component {
  render() {
    let data = [IAD2017_S2, IAD2017_S4];

    let clipData = [];
    data.forEach(item => {
      let newItem = clone(item);
      newItem.data = clipBestWorst(newItem.data);
      clipData.push(newItem);
    });

    return (
      <div>
        <h3>Einkommen</h3>
        {renderChart(data)}
        {renderTab(data)}
        <h3>Einkommen – bereinigt</h3>
        <p> Höchst- und Tiefstverdienende gestrichen</p>
        {renderChart(clipData)}
        {renderTab(clipData)}
      </div>
    );
  }
}
