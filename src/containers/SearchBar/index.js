import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/SearchActions';
import * as errorActions from '../../actions/errorActions';
import './styles.scss';

import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
//todo add props validations 
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: ''};
    this.onChange = (address) => this.setState({ address });
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    if(!this.state.address){
      return this.props.errorActions.throwError('Please Select Location first');

    }
    geocodeByAddress(this.state.address,  (err, latLng) => {
      if(err)
        this.props.errorActions.throwError(err.message || 'Unable To fetch location');
      else
        this.props.searchActions.initSearch(latLng);
    });
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: "Enter City"
    };

    return (
      <form onSubmit={this.handleFormSubmit} className="form-horizontal ">
        <div className="form-group">
          <div className="col-xs-10">
            <PlacesAutocomplete
              inputProps={inputProps}
            />
          </div>
          <div className="com-xs-2">
            <button type="submit" className="btn search-btn"><span>Search</span></button>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    searchActions : bindActionCreators(searchActions, dispatch),
    errorActions : bindActionCreators(errorActions, dispatch)
  };
}

export default connect(null,mapDispatchToProps)(SearchBar);
