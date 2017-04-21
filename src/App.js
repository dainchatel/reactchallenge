import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ckey from './variables';
import Navbar from './components/navbar'
import Calclist from './components/calclist'

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
    axios({
      method: 'get',
      url: 'https://api.mdcalc.com/v1/calculators',
      headers: {
        mdcclient: ckey()
      }
    }).then((res) => {
        this.setState({calculators: res.data.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        <header className='header-big'><img src={'./assets/logo.png'} alt='MD Calc logo'/></header>
        <div className='list-big'>
          <Navbar navs={this.navs}/>
          <Calclist calcs={this.state.calculators}/>
        </div>
      </div>
    );
  }
}

export default App;
