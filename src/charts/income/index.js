import React from "react";
import { VictoryLine, VictoryLabel, VictoryChart, VictoryAxis } from "victory";
// import Theme from './theme.js';
import ThemeSignalwerk, {
  colors,
  strokes,
  labelStyles,
  blockStyles,
  dimensions,
} from "../theme";
import { IAD2017_S2 } from "./incomeHF2017_Semester2.js";
import { IAD2017_S4 } from "./incomeHF2017_Semester4.js";
import { IAD2017_S6 } from "./incomeHF2017_Semester6.js";
import { IAD2019_S1 } from "./incomeHF2019_Semester1.js";
import { IAD2019_S2 } from "./incomeHF2019_Semester2.js";
import { IAD2019_S3 } from "./incomeHF2019_Semester3.js";
import { average, median } from "./util.js";

// const Theme = VictoryTheme.material;
const IAD2017_axis = [54000, 58000, 62000, 66000, 70000, 74000, 78000, 82000];
const IAD2019_axis = IAD2017_axis;

let renderTab = (dataIn, med) => {
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
              <td>
                CHF{" "}
                {Math.round(
                  med ? median(item.data, "f") : average(item.data, "f")
                )}
                .–
              </td>
              <td>
                CHF {Math.round(med ? median(item.data) : average(item.data))}
                .–
              </td>
              <td>
                CHF{" "}
                {Math.round(
                  med ? median(item.data, "m") : average(item.data, "m")
                )}
                .–
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

let renderChart = (dataIn, med, axis) => {
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
        padding={{ top: 50, left: 50, right: 0, bottom: 50 + 75 }}
        domainPadding={{ x: [30, 75] }}
        theme={ThemeSignalwerk}
        standalone={false}
      >
        <VictoryAxis
          tickValues={[0, 1, 2, 3, 4, 5].map((item, index) => index + 1)}
          tickFormat={(y) => `${y} Semester`}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x / 1000} K`}
          tickValues={axis}
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
            data: strokes[0],
          }}
          data={dataIn.map((item, index) => {
            return {
              x: item.semester,
              y: med ? median(item.data, "f") : average(item.data, "f"),
            };
          })}
        />

        <VictoryLine
          style={{
            data: strokes[1],
          }}
          data={dataIn.map((item, index) => {
            return {
              x: item.semester,
              y: med ? median(item.data) : average(item.data),
            };
          })}
        />
        <VictoryLine
          style={{
            data: strokes[2],
          }}
          data={dataIn.map((item, index) => {
            return {
              x: item.semester,
              y: med ? median(item.data, "m") : average(item.data, "m"),
            };
          })}
        />
      </VictoryChart>
    </svg>
  );
};

class sIncome extends React.Component {
  render() {
    let data = [];
    let axis = null;
    if (this.props.filter === "HF2017") {
      data.push(IAD2017_S2, IAD2017_S4, IAD2017_S6);
      axis = IAD2019_axis;
    }

    if (this.props.filter === "HF2019") {
      data.push(IAD2019_S1, IAD2019_S2, IAD2019_S3);
      axis = IAD2019_axis;
    }

    return renderChart(data, this.props.median, axis);
  }
}

export { sIncome as SSRincome };

export default class Income extends React.Component {
  render() {
    let data = [];
    let axis = null;
    if (this.props.filter === "HF2017") {
      data.push(IAD2017_S2, IAD2017_S4, IAD2017_S6);
      axis = IAD2017_axis;
    }

    if (this.props.filter === "HF2019") {
      data.push(IAD2019_S1, IAD2019_S2, IAD2019_S3);
      axis = IAD2019_axis;
    }

    return (
      <div>
        <h3>Einkommen – Durchschnitt</h3>
        {renderChart(data, false, axis)}
        {renderTab(data, false, axis)}
        <h3>Einkommen – Median</h3>
        {renderChart(data, true, axis)}
        {renderTab(data, true, axis)}
      </div>
    );
  }
}
