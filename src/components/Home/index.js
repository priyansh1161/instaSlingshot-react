import React from 'react';
import Map from '../../containers/Map';
import Restro from '../../containers/Restro';
import Cabs from '../../containers/Cabs';
import Gallery from '../../containers/Gallery';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs, Tab } from 'react-bootstrap';
import Landing from '../Landing';
import * as cabsActions from '../../actions/cabsActions';
import * as galleryActions from '../../actions/galleryActions';
// import * as restroActions from '../../actions/restroActions';
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search : props.search,
      activeKey : 1
    };
    this.onTabSelect = this.onTabSelect.bind(this);
  }

  componentWillReceiveProps({search}) {
      this.setState({search});
  }
  onTabSelect(key){
    this.setState({activeKey : key});
    if(key === 2)
      this.props.cabsActions.getCabs(this.state.search.lat, this.state.search.lng);
    else if(key === 3)
      this.props.galleryActions.getGallery(this.state.search.lat, this.state.search.lng);
  }
  render(){
    return (
      <div >
        <Landing/>
        <div className="container">
          {this.state.search.lng &&<div className="row">
            <div style={{ zIndex: 1}}>
              <Map />
            </div>
            <div >
              <Tabs activeKey={this.state.activeKey} defaultActionKey={1} onSelect={this.onTabSelect}>
                <Tab eventKey={1} title="Restaurants">
                  <Restro/>
                </Tab>
                <Tab eventKey={2} title="Cabs">
                  <Cabs />
                </Tab>
                <Tab eventKey={3} title="Gallery">
                  <Gallery />
                </Tab>
              </Tabs>
            </div>
          </div>}
        </div>
      </div>

    );
  }
}

function mapStateToProps({cabs, activeTab, search}){
  return {
    cabs,
    search,
    activeTab
  };
}

function mapDispatchToProps(dispatch){
  return {
    cabsActions : bindActionCreators(cabsActions, dispatch),
    galleryActions : bindActionCreators(galleryActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
