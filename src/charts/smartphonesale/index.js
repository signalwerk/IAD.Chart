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
    console.log('desktopShipment', Data.desktopShipment())

    return (
      <div>
        <VictoryChart
          domainPadding={{x: [5, 30]}}
          theme={ThemeSignalwerk}
        >
        {/*
        <svg width={600} height={400}>
        */}



          {/* Create stylistic elements */}
          <VictoryContainer>
            <rect x="54" y="0" width="10" height="30" fill="#f01616"/>
            <rect x="420" y="10" width="20" height="20" fill="#458ca8"/>
          </VictoryContainer>

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
