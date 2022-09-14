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
  bgcolor:  ' #013c52cc',
  
  boxShadow: 24,
  p: 4,
};

export default function Skill1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button    onClick={handleOpen} style={{color:"black"}}><h5 class="myDIV">PROJECT - 6 : ANIMALS PLANET (REACTJS , API , CSS , MATERISL UI)</h5>
      <div class="hide"> Click To View!!!</div></Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        
      >
        <Box sx={style} style={{borderRadius:"10px"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            <center><b style={{color:"white"}}>ANIMALS PALENT - REACTJS , CSS , API</b></center><br/>
           
          </Typography>
         
          <Typography id="modal-modal-description" >
         
          <img src= '../gallery/SA1.png'alt="img" height="150" style={{marginLeft:"65px"}}     /><br/>
          <img src= '../gallery/SA22.png'alt="img"height="150" style={{marginLeft:"65px"}}   />   <br/>   
          <img src= '../gallery/SA2.png'alt="img" height="150" style={{marginLeft:"65px"}}     /><br/>
         
                       
                        </Typography>
        </Box>
      </Modal>
    </div>
  );
}
