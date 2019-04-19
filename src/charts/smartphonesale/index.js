import React from "react";
import Data from "./data";
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
    let countTicks = [0, 1, 2, 3, 4, 6, 8, 10, 12, 14, 16].map(
      (item, index) => item * 100000000
    );

    return (
      <div>
        <VictoryChart
          height={400 + 75}
          padding={{ top: 50, left: 60, right: 50, bottom: 50 + 75 }}
          domainPadding={{ x: [5, 30] }}
          theme={ThemeSignalwerk}
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
      </div>
    );
  }
}
