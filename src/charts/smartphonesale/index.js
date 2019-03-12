import React from "react";
import Data from "./data";
import ThemeSignalwerk, {  strokes } from "../theme";
import { yAxis } from "../theme";
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
    console.log("desktopShipment", Data.desktopShipment());

    return (
      <div>
        <VictoryChart domainPadding={{ x: [5, 30] }} theme={ThemeSignalwerk}>
          <VictoryAxis tickValues={Data.smartphoneYears()} />

          <VictoryAxis
            dependentAxis
            tickValues={[0, 100, 200, 400, 600, 800, 1000, 1200, 1400, 1600]}
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

          {/*
</svg>
*/}
        </VictoryChart>
      </div>
    );
  }
}
