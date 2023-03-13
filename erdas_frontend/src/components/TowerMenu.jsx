import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from '@mui/material';

export default function TowerMenu({toggle}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const renderLabel = () => {
    return(
      <Box sx = {{display: 'flex', gap: 1}}>
        <CircleIcon/> TOWER DATA
      </Box>
    )
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'white', fontSize:'16px'}}
      >
       {toggle === 0 ? renderLabel() : 'TOWER DATA'}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          style:{
            backgroundColor:'white' 
          }
        }}
      > 
        <MenuItem onClick={handleClose}>50 MHz RWP</MenuItem>
        <MenuItem onClick={handleClose}>915 MHz RWP</MenuItem>
        <MenuItem onClick={handleClose}>Map View</MenuItem>
        <MenuItem onClick={handleClose}>Tower View</MenuItem>
      </Menu>
    </div>
  );
}