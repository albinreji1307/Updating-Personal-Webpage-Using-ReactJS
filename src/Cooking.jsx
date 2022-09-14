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

export default function COOK() {
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
            <b>Cooking</b><br/>
            <img src='../gallery/cook.jpg' alt="img"  height="180" width="280" class="sss"/>
          </Typography>
         
          <Typography id="modal-modal-description" >
         
                    
                       <b> Iam prepared the ingredients and cooked for myself, when i'm ensured that you get the quality food.</b>
                       <p>Cookingis a part of my life... Everyday i try to some thing new food items to more healthy and quality foods.
                             It make me  happier .In fact, this goes beyond my stress issue. 
                             Studies have shown that cooking can really be a therapeutical activity.
                              Even just baking cupcakes or something simple has shown to improve an individual's mindset.
                              Chickencurry & Bake cakes is my Favorite part of Cooking</p>
                        
                      <h5> <p>IT IS A GOOD STRESS RELIEVER </p>
                                 <p> IT CAN MAKE ME A HAPPIER PERSON</p>
                                  <p>IT CAN BOOST MY CONFIDENCE</p>
                                  <p> IT CAN HELP WITH DEPRESSION AND OTHER MENTAL ISSUES.</p></h5>
                            
                           
                           
                          
                        

                        
                       
                        </Typography>
        </Box>
      </Modal>
    </div>
  );
}
