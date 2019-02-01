import React, { Component } from 'react';
import './App.css';
import iGreenCircle from './green-circle.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='clock'>
          <div className='tmp-small'>a</div>
          <div className='tmp'>
            <div className='time-box'>hour</div>
            <div className='time-box-seperator'>
              <img src={iGreenCircle} className='colon' />
            </div>
            <div className='time-box'>minute</div>
            <div className='time-box-seperator'>
              <img src={iGreenCircle} className='colon' />
            </div>
            <div className='time-box'>second</div>
          </div>
          <div className='tmp-small'>c</div>
        </div>
      </div>
    );
  }
}

export default App;
