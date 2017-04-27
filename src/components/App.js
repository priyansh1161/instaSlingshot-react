import React from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import GlobalErrors from '../containers/GlobalErrors';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{zIndex: 3}}>
          <LoadingBar/>
        </div>
        <div style={{zIndex:2}}>
          <GlobalErrors/>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
