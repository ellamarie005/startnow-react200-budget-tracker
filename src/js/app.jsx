import React from 'react';
import IncomeEntries from './components/IncomeEntries';
import ExpenseEntries from './components/ExpenseEntries';
import Summary from './components/Summary';
import styled from 'styled-components';

export default class App extends React.Component {
  render() {
    return (
      <WeatherApp className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Budget Tracker</h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <IncomeEntries />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <ExpenseEntries />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <Summary />
          </div>
        </div>
      </WeatherApp>
    );
  }
}

const WeatherApp = styled.div`
padding: 50px;

.jumbotron {
  opacity: 0.7;
}

.row {
  opacity: 0.9;
}
`
