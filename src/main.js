import React from 'react';
import ReactDOM from 'react-dom';

import Smartphonesale from './charts/smartphonesale';
import Income from './charts/income';


class Main extends React.Component {
  render() {
    return (
      <div style={{width: '600px', margin: '0 auto'}}>
        <h2>Jahreseinkommen – HF2017 – Semester 2</h2>
        <Smartphonesale />
        <Income />
        {/*
          <h2>Smartphone Verkäufe</h2>
          <Smartphonesale />
        */}
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
