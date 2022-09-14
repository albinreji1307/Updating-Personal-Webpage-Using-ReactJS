import React,{Component} from 'react';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import Sidebar1 from './Sidebar1';

import Skill1 from './Skillproject1';
import Skill2 from './Skillproject2';
import Skill3 from './Skillproject3';
import Skill4 from './Skillproject4';
import Skill5 from './Skillproject5';
import Skill6 from './Skillproject6';
import Skill7 from './Skillproject7';
class Skill extends Component{
  render(){


      return(
 
  <div>
    
      <Sidebar1/>
<section class="contactskill" ><br/>
<h2  style={{fontFamily:'sans-serif'}}>Skills</h2>
<br/>
        
<h4>Programming languages</h4>
<img src= '../gallery/html-5.png'alt="img"  height="60" />
<img src= '../gallery/css-3.png'alt="img"  height="60" style={{marginLeft:"10px"}}/>
<img src= '../gallery/sem.png'alt="img"  height="50" style={{marginLeft:"30px"}} />
<img src= '../gallery/bootstrap.png'alt="img"  height="50" style={{marginLeft:"30px"}} />
<img src= '../gallery/react.png'alt="img"  height="50" style={{marginLeft:"30px"}} />
<img src= '../gallery/mui.png'alt="img"  height="50" style={{marginLeft:"25px"}}  />

        
       
          
<br/>
         <br/>
         <Box sx={{ width: '100%'}}>
         <Grid container spacing={12}>
        <Grid item xs={6} style={{fontFamily:"sans-serif"}}>
         <h4 >Project Done</h4>
         <Skill1/>
         <Skill2/>
         <Skill3/>
         <Skill4/>
         <Skill5/>
         <Skill6/>
         <Skill7/></Grid>
         
       
         <Grid item xs={6}>
         <h4>Electrical SKILLS</h4>
         <h5> HV Testing </h5>
        <h5>  Testing & COMMISSION</h5>
        <h5>   inductance / capacitance (quality) testing</h5>
        <br/></Grid>
       </Grid>
       </Box>
              <br/>      
            <br></br><br></br><br></br>  
        </section>
        
        </div>
        )
       
        
    }
  
}

export default Skill;