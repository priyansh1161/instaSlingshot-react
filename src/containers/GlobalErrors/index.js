import React from 'react';
import { connect } from 'react-redux';
import * as errorActions from '../../actions/errorActions';
import { bindActionCreators } from 'redux';

import 'animate.css/animate.css';
import 'toastr/build/toastr.css';

import {ToastContainer, ToastMessage} from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);


class GlobalErrors extends React.Component {
  constructor (props){
    super(props);
  }

  componentWillReceiveProps({error}){
    if(error){
      this.showErrorMessage(error, "");
      this.props.actions.resetError();
    }
  }
  showErrorMessage(e, t) {
    this.refs.container.error(
      e, t, {
        timeOut: 3000,
        extendedTimeOut: 1000
      });
  }
  render(){
    return ( <ToastContainer ref="container"
                    toastMessageFactory={ToastMessageFactory}
                    className="toast-top-right" /> );
  }

}

function mapStateToProps(state){
  return {
    error : state.error
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(errorActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GlobalErrors);
