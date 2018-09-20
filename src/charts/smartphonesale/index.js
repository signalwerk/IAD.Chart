import React from 'react';
import Data from './data'
import ThemeSignalwerk from '../theme'
import { yAxis } from '../theme'
import { VictoryBar, VictoryContainer, VictoryLabel, VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';


// <VictoryAxis
//   dependentAxis
//   tickFormat={(x) => (`$${x / 1000}k`)}
// />

export default class Smartphonesale extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart
          domainPadding={{x: [5, 30]}}
          theme={ThemeSignalwerk}
        >
        {/*
        <svg width={600} height={400}>
        */}





          <VictoryAxis
            tickValues={Data.smartphoneYears()}
          />

          <VictoryAxis
            dependentAxis
            tickValues={[0,100,200,400,600,800,1000,1200,1400,1600]}
          />


        <VictoryLine
            style={{
              parent: { border: "1px solid #ccc"}
            }}
            data={Data.desktopShipment()}
            x='year'
            y='total'
          />



        <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={Data.smartphoneSalesByYear()}
            x='year'
            y='total'
          />



          {/*
</svg>
*/}
        </VictoryChart>
      </div>
    );
  }
}
