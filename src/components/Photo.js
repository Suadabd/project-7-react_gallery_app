import React from 'react'
///Photo function responsible for rendering photo item wrapped in li for each phot returned from API
const Photo = (props) => {
  return (
    <li >
      <img src={props.url}  alt='photo' />
    </li>
  );
    
};

export default Photo;

///* <li>
  //      <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="cat" />
  //   </li>
  