import React from 'react'
import Photo from "./Photo";
import NoResults from './NoResults';
// import NotFound from "./components/NotFound";






const PhotoContainer = ({ data }) => {
 
  




  //conditional rendering 
  // if (results.length > 0 ){
  //   let photos = results.map( photo => (<Photo url = {`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
  // } else {
  //   let photos = <NotFound />
  // }

 
 
 
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        { data.length ? data.map(photo => <Photo url = {`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt="" />)
          : <NoResults /> }
      </ul>
    </div>
  )

};

export default PhotoContainer;
