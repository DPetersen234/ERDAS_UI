import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import {MenuItem} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TowerMenu from './TowerMenu';
import WbCloudySharpIcon from '@mui/icons-material/WbCloudySharp';
import { Select } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const drawerWidth = 240;
const navItems = ['DASHBOARD', 'OCEAN BREEZE', 'TOWER DATA', 'WINDFLOW', 'WINDROSE', 'SETTINGS'];
function Taskbar(props) {
  const [toggle, setToggle] = useState(0)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const renderLabel = (label) => {
    return(
      <Box sx={{display: 'flex', gap: 1 }}>
      <CircleIcon/>
      {label}
      </Box>
    )
  }
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ERDAS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{borderBottomLeftRadius:'25px', borderBottomRightRadius:'25px'}}>
        <Toolbar sx={{bgcolor:'#100D1A', borderBottomLeftRadius:'25px', borderBottomRightRadius:'25px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <WbCloudySharpIcon sx={{width:'30px', height:'30px', mr:'0.5%' }}/>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.5, display: { xs: 'none', sm: 'block' }}}
          >
           ERDAS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
          <MenuItem onClick={()=>setToggle(1)}>{toggle === 1 ? renderLabel('DASHBOARD') :'DASHBOARD'}</MenuItem>
          <MenuItem onClick={()=>setToggle(2)}>{toggle === 2 ? renderLabel('OCEAN BREEZE'):'OCEAN BREEZE'}</MenuItem>
          <MenuItem onClick ={()=> setToggle(0)}><TowerMenu  toggle={toggle}/></MenuItem>
          <MenuItem onClick={()=>setToggle(3)}>{toggle === 3 ? renderLabel('WINDFLOW'):'WINDFLOW'}</MenuItem>
          <MenuItem onClick={()=>setToggle(4)}>{toggle === 4 ? renderLabel('WINDROSE'):'WINDROSE'}</MenuItem>
          <MenuItem onClick={()=>setToggle(5)}>{toggle === 5 ? renderLabel('SETTINGS'):'SETTINGS'}</MenuItem>
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
      <Box component="main" sx={{width: '100%', height:'100vh', p: 3, bgcolor:'#D2CFFF' }}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box>
    </Box>
  );
}

Taskbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Taskbar;
