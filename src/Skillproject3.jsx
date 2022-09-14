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

export default function Skill3() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button    onClick={handleOpen} style={{color:"black"}}><h5 class="myDIV">PROJECT - 3 : PERSONAL WEBPAGE (HTML , CSS , SEMANTIC UI , JAVASCRIPT)</h5>
      <div class="hide"> Click To View !!!</div></Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        
      >
        <Box sx={style} style={{borderRadius:"10px"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
           <center> <b style={{color:"white"}}>PERSONAL WEBPAGE - HTML , CSS , SEMANTIC UI , JAVASCRIPT </b></center><br/>
           
          </Typography>
         
          <Typography >
         
          <img src= '../gallery/SW2.png'alt="img"  height="150" style={{marginLeft:"65px"}}    /> <br/>
          <img src= '../gallery/SW1.png'alt="img"  height="150" style={{marginLeft:"65px"}}/><br/>
          
                        
                       
                        </Typography>
                        <h6 style={{ fontWeight:600 ,color:"white"}}>The MySelf biography Page it Genarally used for :<ul>
                        <li>Side Navbar</li><li>Semantic Card & Models</li> <li>Carosal Images</li>
                        <li>Menu With Dropdownbar</li>
                       
                         <li>Embedded Map and Calander</li> 
                        <li>Bootstrap Validation Form</li>
                        
                         </ul></h6>
        </Box>
      </Modal>
    </div>
  );
}
