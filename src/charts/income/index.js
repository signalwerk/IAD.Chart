import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryLine, VictoryLabel, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
// import Theme from './theme.js';
import ThemeSignalwerk from '../theme'
import {IAD2017_S2, clipBestWorst, average} from './incomeHF2017_Semester2.js';

let colorF = "#c43a31"
let colorM = "#2b517f"
""
// const Theme = VictoryTheme.material;
const Theme = ThemeSignalwerk;

let renderChart = (dataIn) => {

  let data = dataIn.map((item, index) => {
    item._index = index;
    return item;
  })

  var avg = average(data);
  var avgM = average(data, "m");
  var avgF = average(data, "f");

  return <div><VictoryChart
    domainPadding={10}
    theme={Theme}
  >
    <VictoryAxis
      tickValues={data.map((item) => item._index)}
      tickFormat={(y) => (data[y].gender)}
      domain={[-1, data.length]}
    />


    <VictoryAxis

      dependentAxis
      tickValues={[
        20000,
        50000,
        60000,
        70000,
        80000,
        90000,
      ]}
      tickFormat={(x) => (`${x / 1000}k                           `)}
      orientation="left"


    />
    {/*  axisLabelComponent={<VictoryLabel dx={-45}/>} */}
    <VictoryBar
      data={data}

      y={"CHF"}
      x={"_index"}
    />


    {/* Red annotation line */}
    <VictoryLine
      style={{
        data: { stroke: colorF },
        parent: { border: "1px solid #ccc"}
      }}
      data={[
        {x: -1, y: avgF},
        {x: data.length , y: avgF}
      ]}
      standalone={false}
    />
    <VictoryLine
      style={{
        data: { stroke: colorM },
        parent: { border: "1px solid #ccc"}
      }}
      data={[
        {x: -1, y: avgM},
        {x: data.length , y: avgM}
      ]}
      standalone={false}
    />



  </VictoryChart>



  <table>
    <thead>

    <tr>
      <th></th>
      <th>CHF</th>
      <th>%</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td><strong>Durchschnitt</strong></td>
      <td>CHF {Math.round(avg)}.–</td>
      <td>100%</td>
    </tr>
    <tr>
      <td><strong style={{color: colorM}}>Männer</strong></td>
      <td>CHF {Math.round(avgM)}.–</td>
      <td>{Math.round(100/avg*avgM*100)/100}%</td>
    </tr>
    <tr>
      <td><strong style={{color: colorF}}>Frauen</strong></td>
      <td>CHF {Math.round(avgF)}.–</td>
      <td>{Math.round(100/avg*avgF*100)/100}%</td>
    </tr>
  </tbody>

  </table>




    </div>
}


let sampleData = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ];

export default class Income extends React.Component {
  render() {

    let data = IAD2017_S2;
    let dataClip = clipBestWorst(IAD2017_S2);


    return (
      <div>

        <h3>Einkommen</h3>
          {renderChart(data)}
          <h3>Einkommen – bereinigt</h3>
          <p> Höchst- und Tiefstverdienende gestrichen</p>
          {renderChart(dataClip)}


      </div>
    );
  }
}
