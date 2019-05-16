import React from "react";
import Data from "./data";
import ThemeSignalwerk, {
  strokes,
  defaultFont,
  blockStyles,
  dimensions
} from "../theme";
import { abbreviate } from "../../utility/abbreviateNumber";
import { VictoryLabel, VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class Smartphonesale extends React.Component {
  render() {
    let countTicks = [0, 1, 2, 3, 4, 6, 8, 10, 12, 14, 16].map(
      (item, index) => item * 100000000
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
            text={["Desktop Computer", "Smartphones"]}
          />

          <VictoryAxis tickValues={Data.smartphoneYears()} />

          <VictoryAxis
            dependentAxis
            tickValues={countTicks}
            tickFormat={t => `${abbreviate(t)}`}
          />

          <VictoryLine
            style={{
              data: strokes[0]
            }}
            data={Data.desktopShipment()}
            x="year"
            y="total"
          />

          <VictoryLine
            style={{
              data: strokes[1]
            }}
            data={Data.smartphoneSalesByYear()}
            x="year"
            y="total"
          />
        </VictoryChart>
      </svg>
    );
  }
}
