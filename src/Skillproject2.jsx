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
  bgcolor:  '  #013c52cc',
  
  boxShadow: 24,
  p: 4,
};

export default function Skill2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button    onClick={handleOpen} style={{color:"black" }}><h5 class="myDIV">PROJECT - 2 : NATIVE WEBPAGE (HTML , CSS)</h5>
      <div class="hide"> Click To View !!!</div> </Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        
      >
        <Box sx={style} style={{borderRadius:"10px"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            <center><b style={{color:"white"}}>NAVTIVE WEBPAGE - HTML & CSS </b></center>
           
          </Typography><br/>
         
          <Typography  >
         
          <img src= '../gallery/S22.png'alt="img"  height="150" style={{marginLeft:"65px"}}    /> <br/>
          <img src= '../gallery/S21.png'alt="img"  height="150" style={{marginLeft:"65px"}}/><br/>
          
                       
                        </Typography>
                        <h6 style={{ fontWeight:600 ,color:"white"}}>The Native page which contain<br/><ul>
                        <li> Header</li><li>Footer</li> <li>Right & Left Panel </li>
                        <li>Menu With Dropdownbar</li>
                       
                         <li>Embedded Map and Calander</li> 
                        <li> Images</li>
                         <li>iframe</li>
                       
                         <li>Form</li><li>login Page</li><li>Links</li>
                         </ul></h6>
        </Box>
      </Modal>
    </div>
  );
}
