import React,{Component} from 'react';

import Sidebar1 from './Sidebar1';

import Myimg from './IMG_20220407_212025-01.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
class AAA extends Component{
    render(){


        return(
            
    <div >
                   
        <div >
        <Sidebar1/>
        </div>
        <div >

        </div>
        <section class="contacts">
        <Box sx={{ width: '90%' }}>
   
   <Grid container spacing={6}>
     <Grid item xs={16}>
              <div style={{marginLeft:"270px",marginTop:"50px" }} >         
        <h1 class='education ' style={{fontFamily:'sans-serif'}}>Albin REJI</h1>
           <div class="subheading mb-4">
                      <h4>  Plamoottil House , Palakkayam (P.O) , Palakkad Kerala , 678591<br/>
                      <a href='https://mail.google.com/' style={{textTransform:"lowercase"}}>albinreji1303@gmail.com</a></h4>
                    
                    </div>
                    </div> 
                    </Grid>
                    </Grid>
                    </Box>  
                    <img src={Myimg}  style={{width:"220px",marginLeft:"10px",marginTop:"-630px",borderRadius:"16px"}}alt="albin"/><br/><br/>
                    <h3 style={{marginLeft:"28px"}}>About Me</h3> 
                    <h5 style={{marginLeft:"5px",fontWeight:"26",textTransform:"none",fontFamily:'sans-serif'}}><span style={{fontSize:"25px"}}>A</span>  Competent Electrical Engineer with a comprehensive knowledge of designing , developing and maintaince of Electrical system  and<br/> componet required specifications .
                       Now focusing on Electrical and Software Section . As consistent track record successfully<br/> completing a mini project.
                         I'm able to  handle multiple projects simultaneously with high professionalism and accuracy</h5>
                         
                         <a href='https://www.facebook.com/'><FacebookIcon color="primary" sx={{ fontSize: 40 }}/></a>
                         <a href='https://github.com/'><GitHubIcon sx={{ fontSize: 40,marginLeft:"15px",color:"black" }} /></a>
                         <a href='https://twitter.com/'><TwitterIcon color="primary" sx={{ fontSize: 40,marginLeft:"15px" }} /></a>
                         <a href='https://www.linkedin.com/'><LinkedInIcon  sx={{ fontSize: 40,marginLeft:"15px" ,color:"black" }} /></a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                       
                        
            
        </section>
        
      </div>
     
        )
       
        
    }
  
}



    export default AAA;