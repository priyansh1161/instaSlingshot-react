import React from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// import './styles.css';
class Map extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lng : props.lng,
      lat : props.lat
    };
  }
  // componentDidMount(){
  //   this.map = new mapboxgl.Map({
  //     container: 'map-container',
  //     style: 'mapbox://styles/mapbox/streets-v9',
  //     center : [this.state.lng, this.state.lat],
  //     zoom : 9,
  //     scrollZoom : true
  //   });
  //   let nav = new mapboxgl.NavigationControl();
  //   this.map.addControl(nav, 'top-left');
  // }
  componentWillReceiveProps({lng, lat}){
    // this.map.setCenter([lng,lat]);
    console.log(lng, lat);
    this.setState({lng, lat});
  }

  render(){
    return (
      <div>
        <ReactMapboxGl
          style="mapbox://styles/mapbox/streets-v8"
          center={[this.state.lng, this.state.lat]}
          zoom={[9]}
          accessToken="pk.eyJ1IjoicHJpeWFuc2gxMTYxMSIsImEiOiJjajIwMTRtY3YwMjkzMndvNXpndXZ1ZTljIn0.SFXi91zeYGbVmNuA8bdDGg"
          containerStyle={{
            height: "500px",
            width: "100%"
          }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[this.state.lng, this.state.lat]}/>
          </Layer>
        </ReactMapboxGl>
      </div>


    );
  }
}
function mapStateToProps({search}){
  return {
    lng : search.lng,
    lat : search.lat
  };
}
export default connect(mapStateToProps)(Map);
