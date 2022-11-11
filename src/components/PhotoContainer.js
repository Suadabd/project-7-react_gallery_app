import React from 'react'
import Photo from "./Photo";
// import NoResults from './NoResults';
import { useNavigate } from 'react-router-dom';
// import NotFound from "./components/NotFound";






const PhotoContainer = (props) => {
 
  const results = props.data; 
  const navigate = useNavigate();
  //console.log(results);

  // let photos = results.map( (photo) => 
  // <Photo url ={`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt="" />
  // );

  let photos;

  if (results.length > 0 ){
      photos = results.map( photo => (<Photo url = {`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt=""/>));
    } else {
      navigate ("/NoResults");
    }




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
