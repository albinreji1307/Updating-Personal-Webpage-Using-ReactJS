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
  bgcolor: ' #013c52cc',
 

  boxShadow: 24,
  p: 4,
};

export default function Skill1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button   onClick={handleOpen} style={{color:"black"}}><h5  class="myDIV">PROJECT - 1 : BODY PARTS (HTML)</h5>
        <div class="hide"> Click To View !!!</div></Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        
      >
        <Box sx={style}style={{borderRadius:"10px" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            <center><b style={{color:"white"}}>BODY PARTS - HTML</b><br/></center>
           
          </Typography><br/>
         
          <Typography id="modal-modal-description" >
         
          <img src= '../gallery/S1.png'alt="img"  height="150" style={{marginLeft:"65px"}}    /> <br/>
          <img src= '../gallery/S12.png'alt="img"  height="150" style={{marginLeft:"65px"}}/><br/>
          <img src= '../gallery/S13.png'alt="img"  height="150" style={{marginLeft:"65px"}}/>
                      
                        
                       
                        </Typography><br/>
                        <h6 style={{ fontWeight:600, color:"white"}}>The basic of HTML where used to this page 
                          which consist of the pointing the body parts as per as the HEAD , HAND & LEG</h6>
        </Box>
      </Modal>
    </div>
  );
}
