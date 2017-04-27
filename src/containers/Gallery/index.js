import React from 'react';
import { connect } from 'react-redux';
import Gallery from 'react-grid-gallery';
class GalleryContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gallery : props.gallery
    };
  }
  componentWillReceiveProps({gallery}){
    this.setState({gallery});
  }
  render(){

    return <div>
          <Gallery images={this.state.gallery}/>
      </div>;
  }
}

function mapStateToProps({gallery}){
  let formattedGallery = gallery.map((curr) => {
    return {
      src : `${curr.prefix}original${curr.suffix}`,
      thumbnail : `${curr.prefix}cap${parseInt(curr.width/3)}${curr.suffix}`,
      thumbnailWidth : curr.width/3 ,
      thumbnailHeight : curr.height/3
  }});
  return {
    gallery : formattedGallery
  };
}
export default connect(mapStateToProps)(GalleryContainer);
