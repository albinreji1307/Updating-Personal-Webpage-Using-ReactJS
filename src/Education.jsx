import React,{Component} from 'react';

import Sidebar1 from './Sidebar1';



import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';



class Edu extends Component{
  render(){


      return(
 
  <div class="bo">
    
      <Sidebar1/>
<section class="contact" >
  <br/><br/>
        <h2  style={{fontFamily:'sans-serif'}}>Education</h2>
        
        <div> <br/><br/>
    <Box sx={{ width: '100%'}}>
   
      <Grid container spacing={12}>
        <Grid item sm={4} style={{fontFamily:"sans-serif"}}>
        <h3>Degree (B.E EEE)</h3>
        <h3 style={{fontWeight:450}}>Christ the king engineering college</h3>
        <p >Coimbatore,Tamilnadu-641104</p> 
        In my 4 years of my life i'm in  tamilnadu  becouse my college was located on Coimbatore,
                     College life is completely different from school life. 
                     It gives us more exposure and also makes us more confident.
                      Our teachers act more like friends in college, 
                      whereas in school they're like our mentors.
                       Most importantly, college life gives us various challenges than our school life.....
                     <br/><br/>  <p class="clg" >June 2018 - Present</p>
        </Grid>
        <Grid item sm={4} style={{fontFamily:"sans-serif"}}>
        <h3>High secondary</h3>
        <h3 style={{fontWeight:450}}>govt h.s.s Pottassery</h3>
                        <p>Palakkad,Kerala-678591</p>
                  high Secondary school life is known as one of the most memorable years of one's life.
                         It is entirely different from school life. +2 life exposes us to new experiences and things that we were not familiar with earlier.
                        . It gives us more exposure and also makes us more confident. 
                          Our teachers act more like friends in school.That 2 years they provide extra guidents like                            
                          <br/><br/><br/> <p class=" clg">June 2016 - April 2018</p>
                 
        </Grid>
        <Grid item sm={4} style={{fontFamily:"sans-serif"}}>
        <h3>high school</h3>
        <h3 style={{fontWeight:450}} >carmel high school Palakkayam</h3>
                        <p>Palakkad,Kerala-678591</p>
                    <p>School life is the best period of human life. People are learning from his childhood in the school, 
                        and also a school built the character of the man. It is the formative period for everyone.
                        My school life was surely a learning experience. The confidence and motivation it gave me, I couldn't get anywhere else. 
                        Most importantly, it is the place where I recognized my uniqueness and individuality.
                          </p>
                          <p class="clg">June 2013 - April 2015</p>
                 
        </Grid>
      </Grid>
    
    </Box>
    
    </div>

       <br/>
       <br/>      
         
        </section>
        </div>
        )
       
        
    }
  
}

export default Edu;