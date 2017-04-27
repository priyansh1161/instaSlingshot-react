import React, {PropTypes} from 'react';

const Stars = ({stars}) => {
  const starsLength = Math.floor(stars);
  const halfStar = ((stars - Math.floor(stars)) >= 0.5);
  const emptyStarsLength = (halfStar ? 4: 5) - stars;
  let starsArray = [];
  for (let i = 0; i < starsLength; i++) {
    starsArray.push(<i className="fa fa-star"/>);
  }
  if (halfStar) {
    starsArray.push(<i className="fa fa-star-half-o"/>);
  }
  for (let i = 0; i < emptyStarsLength; i++) {
    starsArray.push(<i className="fa fa-star-o"/>);
  }
  return (
    <div>
      {starsArray}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number
};

export default Stars;
