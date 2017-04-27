import React from 'react';
import SearchBar from '../../containers/SearchBar';

import './styles.scss';
const Landing = () => {
  return (
    <div className="banner">
      <h1 className="banner-text">Slingshot</h1>
      <div className="banner-center">
        <SearchBar />
      </div>
      <i className="fa fa-angle-down icon-displace"/>
    </div>
  );
};

export default Landing;
