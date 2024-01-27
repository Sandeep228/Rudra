import React from 'react';

const StarRating = ({ filledStars }) => {
  const totalStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span 
          key={i} 
          style={{ 
            fontSize: '26px', 
            color: i <= filledStars ? '#FFCB44' : '#000' 
          }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={{ display: 'flex' , justifyContent:"center" , marginBottom:"16px" }}>
      {renderStars()}
    </div>
  );
};

export  default StarRating;


