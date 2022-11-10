import React, { useEffect } from 'react'
import Photo from "./components/Photo";
// import NotFound from "./components/NotFound";

import apiKey from '../config';




const PhotoContainer = (props) => {
 
  const results = props.data; 

  let photos = results.map( (photo) => 
  <Photo url ={`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
  );






  //conditional rendering 
  // if (results.length > 0 ){
  //   let photos = results.map( photo => (<Photo url = {`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
  // } else {
  //   let photos = <NotFound />
  // }

 
 
 
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul> { photos } </ul>
    </div>
  )

};

export default PhotoContainer;
