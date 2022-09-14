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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>READ MORE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            <b>Batminton</b>
            <img src= '../gallery/BAT.jpg'alt="img"  height="180" class="sss"/>
          </Typography>
         
          <Typography id="modal-modal-description" >
         
                    
                       <b> During my free time i'am mostly like to play Batminton becouse It increases the Range of Motion.</b>
                       
                         <p>During my freetime im like to play some games like football , wollyball , etc ...
                             But mostly i would like to 
                            playing badminton .It  has shown to improve the health and functioning of your lungs drastically.<h5><p><b>IMPROVES REFLEXES, INTELLIGENCE AND PRODUCTIVITY</b></p></h5>
                               <p> <b>KEEP ME IN GOOD MOOD, STRONG & MOTIVATED</b></p>
                           
                           
                            The main reason is healthy blood movement and improvement in overall body stamina.
                                my Favorite brand racket is
                             Apacs
                             the racket is very powerful and is a regular position to make powerful.

                             
                         </p>
                        
                       
                        </Typography>
        </Box>
      </Modal>
    </div>
  );
}
