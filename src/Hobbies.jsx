import React,{Component} from 'react';

import Sidebar1 from './Sidebar1';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



import Grid from '@mui/material/Grid';
import BasicModal from './Batminton';
import Basic from './Travel'; 
import COOK from './Cooking'; 
import Box from '@mui/material/Box';

class Hobbie extends Component{
  render(){


      return(
 
  <div>
   
      <Sidebar1/>
<section class="contact" style={{marginLeft:"50px"}}>
<br/><br/>
<h2 style={{fontFamily:'sans-serif' }}>Hobbies</h2>
<br/><br/>
<Box sx={{ width: '90%' }}>
   
   <Grid container spacing={12}>
     <Grid item sm={4}>
<Card sx={{ maxWidth: 285 }}>
      <CardMedia
        component="img"
        height="180"
        image='../gallery/BAT.jpg'
        alt="batmidon"
      />
     
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        BATMINTON
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span>Favorite Brand : Apacs</span>
        <p>  During my free time i mostly like to play Batminton.
                              </p>     
         
        </Typography>
        
      </CardContent>
     <CardActions>
     <BasicModal/>
      
      </CardActions>
    </Card>
  

    </Grid>
        <Grid item sm={4}>
    <Card sx={{ maxWidth: 285 }}>
      <CardMedia
        component="img"
        height="180"
        image='../gallery/travel.webp'
        alt="batmidon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        TRAVEL
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span class="date"> Like to travel : North India</span>
        <p class="description">Tucked safely away at home, you can feel as if the entire...
                              </p>     
         
        </Typography>
       
      </CardContent>
      <CardActions>
        
      <Basic />
      </CardActions>
     
    </Card>
    </Grid>


    <Grid item sm={4}>
    <Card sx={{ maxWidth: 285 }}>
      <CardMedia
        component="img"
        height="180"
        image='../gallery/cooking.jpg'
        alt="batmidon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        COOKING
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span class="date">During Free Time Try New Dishes</span>
        <p class="description"> Iam prepared the ingredients and cooked for myself...
                              </p>     
         
        </Typography>
      </CardContent>
      <CardActions>
        
        <COOK />
      </CardActions>
     
    </Card>
   
    </Grid>
   
      </Grid>
    
    </Box>
        

    
        </section>
      <br/><br/>
                  
                     
        </div>
        )
       
        
    }
  
}

export default Hobbie;