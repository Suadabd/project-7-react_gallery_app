import React, { useEffect} from "react";
import apiKey  from "./config";


import { Routes, Route, Navigate } from "react-router-dom"; 
import { useState } from 'react';


///App components 
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import PhotoContainer from "./components/PhotoContainer";
import SearchForm from "./components/SearchForm";
import { render } from "@testing-library/react";


const App = (props) => {
  //  console.log(App);
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${tag}&per_page=24&format=json&nojsoncallback=1`;

  const performSearch = (query= '') => { 

    useEffect(() => {

      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then((results) => results.json())
        .then(responseData => {
            if(query  ==='cats') {
              setCat(responseData.photos.photo);
            } if (query  ==='dogs') {
              setdog(responseData.photos.photo);
            } if (query  === 'computers'){
              setcomp(responseData.photos.photo)
          }
        

        });
      
    }
    return (
      <div className="container">
        <SearchForm onSearch={performSearch}/>
          <Nav />
    
          <Routes>

            <Route path ="/" element={<Navigate to="/cats" />} />
            <Route path ="/cats" element={<PhotoContainer data="cats" />} />
            <Route path ="/dogs" element={<PhotoContainer data="dogs" />} />
            <Route path ="/computers" element={<PhotoContainer data="computers" />} />
            <Route path = "*" element={<NotFound />} />
            <Route path ="/search/:keyword" element={<PhotoContainer />} />

          </Routes>
    
     </div>
  )
}}
export default App;
