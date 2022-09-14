import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Sidebar.css'
import Myimg from './IMG_20220407_212025-01.jpeg'
import{NavLink ,Link} from 'react-router-dom';


const drawerWidth = 240;
let navItems = ['Home'];





const navcontact = ['Education']
const navskills = ['Skills']
const navhobbies = ['Hobbies']
const navres = ['Resume']
const navfavourite = ['Favourite']
const navcontactme = ['Contact']
const navfeedback = ['Feedback']


function Sidebar1(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' ,backgroundColor:'#013d52'}}>
      <Typography variant="h6" sx={{ my: 1.3 ,color:"white"}}>
        ALBIN REJI
      </Typography>
      <Divider />
      <img  src={Myimg}  width= "110em" height="130em"  style={{borderRadius:'8px'}} alt="profile" />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            
            <ListItemButton>
            <Link    to= '/' > <Button key={item}  sx={{ marginLeft:'65px',color:"white" }}>
                {item}
              </Button>
                
              </Link>
          
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {navcontact.map((item) => (
          <ListItem key={item} disablePadding>
            
            <ListItemButton>
            <Link   to= '/Education' > <Button key={item}  sx={{ marginLeft:'55px',color:"white" }}>
                {item}
              </Button>
                
              </Link>
          
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {navskills.map((item) => (
          <ListItem key={item} disablePadding>
            
            <ListItemButton>
            <Link   to= '/Skill' > <Button key={item}  sx={{ marginLeft:'65px',color:"white" }}>
                {item}
              </Button>
                
              </Link>
          
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {navhobbies.map((item) => (
          <ListItem key={item} disablePadding>
            
            <ListItemButton>
            <Link to= '/Hobbies' > <Button key={item}  sx={{ marginLeft:'65px',color:"white" }}>
                {item}
              </Button>
                
              </Link>
          
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>




      
      <List>
        {navres.map((item) => (
          <ListItem key={item} disablePadding>
            
            <ListItemButton>
            <Link to= '/Resume' > <Button key={item}  sx={{ marginLeft:'65px',color:"white" }}>
                {item}
              </Button>
                
              </Link>
          
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {navfavourite.map((item) => (
          <ListItem  key={item} disablePadding>
            
            <ListItemButton>
            <Link   to= '/Favourite' > <Button key={item}  sx={{ marginLeft:'57px',color:"white" }}>
                {item}
              </Button>
                
              </Link>
          
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {navcontactme.map((item) => (
          <ListItem key={item} disablePadding>
            
            <ListItemButton>
            <Link to= '/Contactme' > <Button key={item}  sx={{ marginLeft:'65px',color:"white" }}>
                {item}
              </Button>
                
              </Link>
          
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {navfeedback.map((item) => (
          <ListItem key={item} disablePadding>
            
            <ListItemButton>
            <Link to= '/Feedback' > <Button key={item}  sx={{ marginLeft:'65px',color:"white" }}>
                {item}
              </Button>
                
              </Link>
          
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
    <AppBar 
    component="nav"
  
    style={{backgroundColor:"#013d52"}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
      
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          ALBIN REJI
        </Typography >
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <NavLink activeClassName="active" to= '/' ><Button activeClassName="active" key={item} sx={{ color: '#fff'  }} >
              {item}
            </Button></NavLink>
          ))}
        </Box>
        
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navcontact.map((item) => (
            <NavLink activeClassName="active" to= '/Education'><Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button></NavLink>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navskills.map((item) => (
            <NavLink activeClassName="active" to= '/Skill'><Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button></NavLink>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navhobbies.map((item) => (
            <NavLink activeClassName="active" to= '/Hobbies'><Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button></NavLink>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navres.map((item) => (
            <NavLink activeClassName="active" to= '/Resume'><Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button></NavLink>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navfavourite.map((item) => (
            <NavLink activeClassName="active" to= '/Favourite'><Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button></NavLink>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navcontactme.map((item) => (
            <NavLink activeClassName="active" to= '/Contactme'><Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button></NavLink>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navfeedback.map((item) => (
            <NavLink activeClassName="active" to= '/Feedback' exact ><Button key={item} activeClassName="active" sx={{ color: '#fff' }}>
              {item}
            </Button></NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
      <Drawer
      
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
   
  </Box>
);
}



export default Sidebar1;