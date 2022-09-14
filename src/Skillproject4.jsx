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
  bgcolor: '  #013c52cc',
  
  boxShadow: 24,
  p: 4,
};

export default function Skill4() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button   onClick={handleOpen} style={{color:"black"}}><h5 class="myDIV">PROJECT - 4 : PERSONAL WEBPAGE (REACTJS , MAREIAL UI , CSS)</h5>
      <div class="hide"> Click To View !!!</div></Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        
      >
        <Box sx={style} style={{borderRadius:"10px"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
           <center> <b style={{color:"white"}}> PERSONAL WEBPAGE - REACTJS , MATERIAL UI , CSS </b>
           </center><br/>
          </Typography>
          
          <img src= '../gallery/SP2.png'alt="img"height="150" style={{marginLeft:"65px"}}   />   <br/>   
          <img src= '../gallery/SP3.png'alt="img" height="150" style={{marginLeft:"65px"}}     /><br/>
          <img src= '../gallery/SP.png'alt="img" height="150" style={{marginLeft:"65px"}}     /><br/>
         
         
         
          
          <h6 style={{ fontWeight:600  ,color:"white"}}>ReactJS Responsive Page:
          <ul>
                        <li>Material ui Card , Models , Icons</li><li>Html Validation </li>
                        
                         <li>Embedded Map and Calander</li> 
                       
                       
                         
                         </ul></h6> 
                       
                        
        </Box>
      </Modal>
    </div>
  );
}
