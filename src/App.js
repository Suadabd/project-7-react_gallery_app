import React, { useEffect} from "react";
import apiKey  from "./config";


import { Routes, Route, Navigate } from "react-router-dom"; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


///App components 
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import PhotoContainer from "./components/PhotoContainer";
import SearchForm from "./components/SearchForm";
import NoResults from "./components/NoResults";


 
const queries = {
  cats: 'cats',
  dogs: 'dogs',
  computers: 'computers'
};

const App = (props) => {
  //  console.log(App);
  //const performSearch = (query= '') => { }


  const navigate = useNavigate();
//state
const [cats, setCat] = useState([]);
const [dogs, setDog] = useState([]);
const [computers, setComp] = useState([]);
const [tag, setTag] = useState('cats');
const [photo, setPhoto] = useState([]);


useEffect(() => {
    
    for (let i in queries){
    
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${i}&per_page=24&format=json&nojsoncallback=1`)
      .then((results) => results.json())
      .then(responseData => {
          if(i  ==='cats') {
            setCat(responseData.photos.photo);
            // console.log(responseData);
            navigate ("/cats");
          } if (i  ==='dogs') {
            setDog(responseData.photos.photo);
          } if (i  === 'computers'){
            setComp(responseData.photos.photo)
        }
      
    })
    }},[queries]);
/// [queries] if this var/queries changes call use effect again.
    useEffect(() => {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then((results) => results.json())
      .then(responseData => {setPhoto(responseData.photos.photo)})
    },[tag]);
// tag is the thing that changes with search

    // function onSearch (searchText) {
    //   setTag(searchText)
    // }
          
    return (
      <div className="container">
        <SearchForm onSearch={searchText=> setTag(searchText)}/>
          <Nav />
          <Routes>

            <Route path ="/cats" element={<PhotoContainer data={cats} />} />
            <Route path ="/dogs" element={<PhotoContainer data={dogs} />} />
            <Route path ="/computers" element={<PhotoContainer data={computers} />} />
            <Route path = "*" element={<NotFound />} />
            <Route path = "/NoResults" element={<NoResults />} />
            <Route path ="/search/:keyword" element={<PhotoContainer data={photo} />} />

          </Routes>
      </div>
            )


}
export default App;
