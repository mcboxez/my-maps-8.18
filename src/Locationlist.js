import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import locations from'./locations';


export class Locationlist extends React.Component {

	state = {
       locations: [],
       query: ''
	}


    componentDidMount(){
      this.setState({
      	locations: locations
      })
    }

  //更新搜索框数据，筛选出搜索框与地点列表的相同项  
    updateQuery = (query) => {
    if (!query) {
      this.setState({ query: '', locations: [] })
    } else {
      this.setState({ query: query.trim() })
      const newLocations = this.state.query.value;
      this.setState((state) => ({
        newLocations : state.locations.filter((a) =>a.title == locations.title)
      }))
      return newLocations

    }
  }


   	render(){
		return(
		  <div>
		    <p>Location List</p>
		    <input type="text" value = {this.state.query} onChange= { event => this.updateQuery(event.target.value)}  />
		    {
		    	this.props.locations.map(location =>{
		    		return(
		    			<p>{location.title}</p>
		    			)
		    	})
		    }
		  </div>
		)


		
        
		  
	   	
	   }
	


}


export default Locationlist