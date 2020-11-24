import React from "react";
import Button from "core/components/Button";
import Header from "core/components/Header";
import ImageLoader from "./Loader/ImageLoader";
import InfoLoader from "./Loader/InfoLoader";
import "./styles.css";

 const Search = () => {
   return (
     <>
       <Header />
       <div className='search-container'>
         <h1 className='search-text'>Encontre um perfil Github</h1>
         <input
           type='text'
           placeholder='Usuário Github'
           className='search-input'
         />
         <div className='btn-search-container'>
           <Button title='Encontrar' />
         </div>
       </div>
       <div className='info-container'>
         <div className='image-loader-container'>
           <ImageLoader />
         </div>
         <div className='info-loader-container'>
           <InfoLoader />
         </div>
       </div>
     </>
   );
 };

 export default Search;