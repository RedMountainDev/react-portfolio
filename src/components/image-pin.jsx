import React from 'react';

function ImagePin(props) {
  let imgUrl = props.src;
  let alt = props.alt;
  return (
    <div className='image-pin__container theme-dark image-pin--large'>
      <img className='image-pin__content' alt={alt} src={imgUrl} />
    </div>
  );
}

export default ImagePin;
