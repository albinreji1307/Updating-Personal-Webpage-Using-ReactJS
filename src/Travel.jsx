import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};

export default function Basic() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>READ MORE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            <b>Travel</b><br/>
            <img src='../gallery/5.jpeg' alt="img"  height="180" width="280" class="sss"/>
          </Typography>
         
          <Typography id="modal-modal-description" >
         
                    
                       <b> Tucked safely away at home, you can feel as if the Entire world revolves around you</b>
                       
                        
                               <p> <b>YOU'LL EXPERIENCE THE INTERCONNECTEDNESS OF HUMANITY</b></p>
                               <p><b>TRAVEL CAN IMPROVE YOUR COMMUNICATION SKILLS AND GET REAL-LIFE EDUCATION</b></p>
                               <p> <b>MAKE MEMORIES / BOOST YOUR CONFIDENCE</b></p>
                            
                            
                           
                           
                           <p>    This is why travelling is important to you..... </p><br/>Including my travelling experienceand and iam mostly traveled place like Banglore the first thing I noticed the climate of Bangalore .It was fantastic in the month of May with some rainfall,
      and  more memorable place is Varanasi
 Once you're in Varanasi, you'll experience crowd and queue, temples everywhere, old traditional buildings, narrow lanes, cows, etc and that's the beauty of Varanasi.
                             
                            
                        
                        

                        
                       
                        </Typography>
        </Box>
      </Modal>
    </div>
  );
}
