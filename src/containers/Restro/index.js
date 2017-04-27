import React from 'react';
import { connect } from 'react-redux';
import RestroCard from '../../modules/RestroCard';

//todo make Nothing to show a modular component.
class Restro extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      restro : props.restro
    };
  }
  componentWillReceiveProps({restro}){
    console.log(restro);
    this.setState({restro});
  }
  render(){
    return <div>
      { this.state.restro.length ? this.state.restro.map(curr => <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <RestroCard name={curr.name}
                    stars={curr.rating}
                    distance={curr.distance}
                    display_phone={curr.display_phone}
                    key={curr.id}
                    id={curr.id}
                    imageURL={curr.image_url}
        />
      </div>) : <div className="text-center text-muted">Nothing here !</div>}
    </div>;
  }
}

function mapStateToProps({restro}){
  let sortedRestros = restro.sort(function(a, b) {

    return a.distance < b.distance ? -1 : 1;
  });
  return {
    restro : sortedRestros
  };
}
export default connect(mapStateToProps)(Restro);
