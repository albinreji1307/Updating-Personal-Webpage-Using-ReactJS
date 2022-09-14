import React,{Component} from 'react';
import Grid from '@mui/material/Grid';

import MM from './Alan-Walker-Faded.mp3';
import Paper from '@mui/material/Paper';
import Sidebar1 from './Sidebar1';





class Music1 extends Component{
  render(){


      return(
        
  <div>
   
  
<section  class="contactmusic">
 
  <div class="header1" > <Sidebar1/><br/><br/><br/><br/><h2 style={{marginLeft:70,fontFamily:"sans-serif",color:"grey"}}>MUSIC</h2><br/>
  <br/>
  <Grid container spacing={6}>
     <Grid item xs={4}>
     <div class="con bok" style={{marginLeft:70}}>
     <div class="user-info">
     <audio controls style={{width:'190px', backgroundColor:'white'}} >
                <source src={MM} type="audio/ogg"/>
              
              </audio>
        </div><br/><br/>
      <div class="img-con">
      <img src='../gallery/alanwalllk.jpg' alt='alan' />
   
     
      </div>
      </div>
 </Grid>
     
      <Grid item xs={8}>
        <div class="music">
      <h3 >ALAN WALKER-<br/><span style={{color:'red'}}>FADED</span></h3> </div><br/><br/>
      <h4 class="music">FAVOURITE record producer</h4>
      <Paper sx={{maxWidth:2900, marginLeft:0 ,backgroundColor:'transparent'}}>
      <p style={{color:'grey',fontFamily:"sans-serif"}} class="music"> <b>ALAN OLAV WALKER : </b>Alan Walker is a music producer and a DJ. Alan Olav Walker popularly known as
                                             Alan Walker.Alan Walker has several songs many music lovers enjoy particularly his 2015 single titled “Faded”. 
                                             Other songs by Alan Walker include “The Spectre”, “Alone”, “Darkside”, “On my way” amongst others.</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
            </Paper>
                                         
<div>
       
        
     
   </div>
  </Grid>
   </Grid>
  
  
   </div>
 

 

            
            
              
           
          
        </section>
        
       
        </div>
        )
       
        
    }
  
}

export default Music1;