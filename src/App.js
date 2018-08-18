import React, { Component } from 'react';
import './App.css';
import locations from'./locations';

import Mapcontainer from './Mapcontainer'
import Locationlist from './Locationlist'

class App extends Component {
  state = {
      places: [],
      selectedPlace: {}
    };

//让places数组获得locations.js的地点信息
  componentDidMount(){
   this.setState({
    places: locations
   });
  }

    
  render() {
    const {places, selectedPlace} = this.state;
    return (
      <div className="App">
        <Locationlist 
        locations={this.state.places}/>

        <Mapcontainer 
        places={places}
        selectedPlace={selectedPlace}
        />
      </div>
    );
  }
}

export default App;
