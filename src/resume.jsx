import React from 'react';
import Myimg from './IMG_20220407_212025-01.jpeg'

import Sidebar1 from './Sidebar1';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';






   
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' :'white',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    
    export default function Resume(){
      return (
      
        <div class="contactresume"><div>
        <Sidebar1/></div> <br/>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md:0 }}>
            <Grid item sm={2.5}>
            <Item>


	
   
   
        
        <br/>
        <br/>
        <div>
            
           <img style={{marginLeft:"5px" ,borderRadius:"95px"}}src={Myimg}  width= "120em" height="130em" alt="profile" />
              <h4 style={{color:'black',paddingLeft:'20px'}} >Albin Reji</h4>
        </div>
    <br/><h5>PERSONAL DETIALS</h5>
    <i class="home icon"></i><h6 style={{fontWeight:"400"}} > Plamoottil House Palakkayam Post Palakkad,Kerala ,678591 </h6><br/><br/>
        <i class="mail icon"></i><h6 style={{fontWeight:"400"}}> albinreji1307@gmail.com</h6><br/><br/>
            <i class="phone icon"></i><h6 style={{fontWeight:"400"}}>(+91) 7306325719</h6><br/><br/>
              <i class="linkedin icon"></i><h6 style={{fontWeight:"400"}} >linkedin.com/in/albinreji</h6>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>


             
 <br/>
 </Item>
 
  
   
   
   
 




                 




 

            </Grid>
            <Grid item sm={9.5 } >

              <center style={{backgroundColor:"transparent", marginTop:"20px"}}>             
 
  	
      <h3><u>OBJECTIVE</u></h3>
  <h6>A Competent Electrical Engineer with a comprehensive knowledge of designing , developing and maintaince of Electrical system  and componet required specifications.
    Now focusing on Electrical and Software Section.As consistent track record successfully completing a mini project.
     I'm able to handle multiple projects simultaneously with high professionalism and accuracy. </h6>

     <h3><u>EDUCATION</u></h3>
    
        
        <h4 >U.G</h4>
        <div ><h5>B.E Electrical And Electronics Engineering<br/>Christ the king engineering college</h5></div>
        <h6>June 2018 - June 2022</h6>
       
        <h4>High Secondary</h4>
                <div ><h5 >Computer Science<br/> Govt H.S.S Pottassery </h5></div>
                <h6 >June 2016 - April 2018</h6>
     
                <h4>High school</h4>
                <div ><h5>SSLC<br/>Carmel High School Palakkayam</h5></div>
        
                <div> <br/>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        	<h3><u>SKILLS</u></h3>
          <h6>
        	
        		HTML / HTML5 /
        		CSS / CSS3 /
        		Javascript <br/>
        	Jquery  /
        	Bootstrap / Semantic-ui/
          React-js / Material-ui
        		
            
        	</h6>
     
        </Grid>
        <Grid item xs={6}>
          <h3><u>HOBBIES</u></h3> 
        <h6 >Batminton <br/>
              Cooking 
       / Travelling </h6>
       
        </Grid>
     
      </Grid>
    </Box>
    <br/>
    </div>

          
		

    



	
  
  </center>
            </Grid>
            
          </Grid>
        </Box>
        <br/>
        </div>
      );
    }
  
       




 