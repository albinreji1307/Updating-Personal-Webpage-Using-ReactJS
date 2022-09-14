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
  width: 300,
  bgcolor: '  #013c52cc',
  
  boxShadow: 24,
  p: 4,
};

export default function Skill7() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button  color='warning' onClick={handleOpen}><h5>PROJECT - 7 : WAITING...</h5></Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            <b>WAITING FOR REDUX</b>
           
          </Typography>
         
          <Typography id="modal-modal-description" >
         
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}
