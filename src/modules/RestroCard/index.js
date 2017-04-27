import React from 'react';
import './styles.scss';
import {Link} from 'react-router';
import Stars from '../Stars';
class RestroCard extends React.Component {
  render() {
    return (
      <Link to={`/restro/${this.props.id}`} className="link-card-stay">
        <div className="card-stay">
          <img className="img-responsive" src={this.props.imageURL}/>
          <div className="card-info">
            <h6 className="text-center">{this.props.name} </h6>
            <h6 className="text-muted text-center">{parseInt(this.props.distance)/1000} km</h6>
            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
              <h6 className="text-muted text-center">{this.props.display_phone}</h6>
              <div style={{flexGrow: 1}}/>
              <Stars stars={this.props.stars}/>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

RestroCard.propTypes = {
  id : React.PropTypes.string,
  imageURL : React.PropTypes.string,
  name : React.PropTypes.string,
  distance : React.PropTypes.string,
  display_phone : React.PropTypes.string,
  stars : React.PropTypes.number
};


export default RestroCard;
