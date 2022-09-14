import React,{Component} from 'react';



import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


import Grid from '@mui/material/Grid';
import Sidebar1 from './Sidebar1';
import Box from '@mui/material/Box';



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class Food extends Component{
  render(){


      return(
 
  <div class="b1243">
   
    

      
<section class="contact" >
<Sidebar1/>

<br/><h6>MY FAVOURITES...</h6><h2 style={{fontFamily:"sans-serif"}}>FOOD</h2>


<Box sx={{ width: '90%' }}>
   
   <Grid container spacing={6}>
     <Grid item xs={4}>

     <Card sx={{ maxWidth: 290 }}>

     <Carousel>
                <div>
                    <img src='../gallery/veg1.jpg' sx={{minWidth:30}} alt='fq' />
                    
                </div>
                <div>
                    <img src='../gallery/nv1.jpg'  sx={{minWidth:30}} alt='fq'/>
                   
                </div>
                
            </Carousel>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        BREAKFAST
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span>Puttu & Kadala</span>
        <p> Puttu and Kadala is a popular Kerala breakfast.
                                   It goes best with vegetable kurma, 
                                    you can also have it with vegetable stew or Kerala egg curry.
                              </p>     
         
        </Typography>
        
      </CardContent>
    
    </Card>
  

    </Grid>
        <Grid item xs={4}>
    <Card sx={{ maxWidth: 290 }}>
      
        <Carousel>
                <div >

                    <img src='../gallery/dqq.jpg'  sx={{minHeight:30}} alt='fq' />
                    
                </div>
                <div  >
                    <img src='../gallery/d22.jpg' alt='fq'/>
                   
                </div>
                
            </Carousel>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        LUNCH
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span class="date">Meals</span>
        <p class="description">Lunch is a meal eaten around midday.
                                   It is commonly the second meal of the day, after breakfast,
                                    and varies in size by culture and region.
                                      
                              </p>     
         
        </Typography>
       
      </CardContent>
     
    </Card>
    </Grid>


    <Grid item xs={4}>
    <Card sx={{ maxWidth: 285 }}>
    <Carousel>
                <div>
                    <img src='../gallery/v4.jpg' alt='fq' />
                    
                </div>
                <div>
                    <img src='../gallery/d6q.jpg' alt='fq'/>
                   
                </div>
                
            </Carousel>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        DINNER
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span class="date">Light Food like chappathi</span>
        <p class="description">   Formerly, dinner typically referred to a main meal
                                   eaten in the middle of the day,
                                    while supper referred to a light meal eaten in the evening.
                              </p>     
         
        </Typography>
      </CardContent>
      
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

export default Food;