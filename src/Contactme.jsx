import * as React from 'react';

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Sidebar1 from './Sidebar1';

  

export default function Me() {
  return (
    <div class="contactmee">
      <div >   <h2 style={{fontFamily:'sans-serif',marginTop:"-74px",marginLeft:"30px"}}>CONTACT</h2> <br/></div>
    <Sidebar1/>
      
    <Box sx={{ width: '100%' }}  style={{marginLeft:"30px"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <div class="subheading"><h4>Chat with me</h4>
                        <h6 >(+91) 9207618802</h6></div>
                   
        </Grid>
        <Grid item xs={6}>
        <div class="subheading"><h4>E-Mail</h4>
                        <h6 >albinreji1307@gmail</h6></div><br/><br/>
        </Grid>
        <Grid item xs={6}>
        <div class="subheading"><h4>Address</h4>
                        <h6>Plamoottil (H) Palakkayam(p.o) Palakkad Kerala 678591.</h6></div><br/>
        </Grid>
        <Grid item sm={6}>
        <div class="subheading"><h4>Call Me</h4>
                        <h6>(+91) 7306325719</h6>
                    </div>
        </Grid>
      </Grid><br/>
      <h4>Calendar</h4>
      <iframe title='CLANDER' src="https://calendar.google.com/calendar/embed?src=albinreji1307%40gmail.com&ctz=Asia%2FKolkata"  width="415px" height="250" frameborder="0" scrolling="no"></iframe>
    </Box>
    <br/>
    </div>
  );
}
