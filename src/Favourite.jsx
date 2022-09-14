import React,{Component} from 'react';

import Sidebar1 from './Sidebar1';

import'./fav.css';



import {Link} from 'react-router-dom';





class Favourite extends Component{
  render(){


      return(
      <div class="contactfav"> 
  
    <div  style={{marginLeft:"20px"}} >

<h2  style={{fontFamily:'sans-serif' }} >FAVOURITES</h2>
<br/>
    
      <Sidebar1/>
      <div class="cards">
<article class="card card--1">
  <div class="card__info-hover">
    
      <div class="card__clock-info">
        
      </div>
    
  </div>
  <div class="card__img"></div>
  <Link to='/Food' class="card_link">
     <div class="card__img--hover"></div>
   </Link><center>
  <h4 style={{marginTop:"40px",fontSize:"35px"}}>Food</h4></center>
</article>
  
  
<article class="card card--2">
  <div class="card__info-hover">
  
      <div class="card__clock-info">

      </div>
    
  </div>
  <div class="card__img"></div>
  <Link to='/Music1' class="card_link">
     <div class="card__img--hover"></div>
   </Link>
   <center>
  
 
  <h4 style={{marginTop:"40px",fontSize:"35px"}}>MUSIC</h4></center>
</article>

  
<article class="card card--3 " >
  <div class="card__info-hover">
    
      <div class="card__clock-info">
        
       
      </div>
    
  </div>
  <div class="card__img"></div>
  <Link to='/Gallery' class="card_link">
     <div class="card__img--hover"></div>
   </Link><center>
   <h5 style={{marginTop:"40px",fontSize:"35px",}}>GALLERY</h5></center>
</article>  
  
  
 
  </div>
       
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/><br/>
        </div> 
        
        )
       
        
    }
  
}

export default Favourite;