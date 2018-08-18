import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



export class Mapcontainer extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {
    		showingInfoWindow: false,
    		activeMarker: {},
    		selectedPlace: null,
    		map: null,
    		url: {},
    		google: null,
    		markers: null,
        infoWindow: null
    	};
    }


    fetchWeather(marker){
      var url = 'https://free-api.heweather.com/s6/weather/now?location=${"Kunming"}&key=HE1808121129211714'
      fetch(url)
      .then(res => res.json())
      .then(data => {
        
        console.log(data)

        let weatherNow = data.HeWeather6[0].now
        let content = '${weatherNow.tmp},${weatherNow.wind_dir}'
        this.state.infoWindow.setContent(content)
        this.state.infoWindow.open(this.state.map, marker)
        
      })
    }
    

    componentDidMount(){
      const {google, places} = this.props
      const mapDiv = this.refs.map

      let map = new google.maps.Map(mapDiv,{
      	zoom: 14,
      	center: this.props.places[0].location
      })
      let markers = places.map(place => {
      let marker = new google.maps.Marker({
        map,
        position: place.location,
        title: place.title 
      })

      marker.addListener('click', (evt) =>{
        console.log(evt)
       
        this.fetchWeather(marker)

      })
    })


    let infoWindow = new google.maps.InfoWindow()

      this.setState({
      	markers,
        infoWindow,
        map
      })


    }



    render(){ 
       return <div ref="map" style = {{height: '100vh'}}></ div>

    }

	
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyAk9YfxQvymNc0YRvG7JXhrBDfUyL4UZSo')
})(Mapcontainer)



 