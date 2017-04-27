import React from 'react';
import { connect } from 'react-redux';
import CabCard from '../../modules/CabCard';
class Cabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cabs : props.cabs
    };
  }
  componentWillReceiveProps({cabs}){
    this.setState({cabs});
  }
  render(){
    return <div>
      { this.state.cabs.length ? this.state.cabs.map(curr => <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <CabCard
          title={curr.display_name}
          imageURL={curr.image}
          price_details={curr.price_details}
          description={curr.description}
          capacity={curr.capacity}
        />
      </div>) : <div className="text-center text-muted">Nothing here !</div>}
    </div>;
  }
}

function mapStateToProps({cabs}){
  return {
    cabs
  };
}
export default connect(mapStateToProps)(Cabs);
