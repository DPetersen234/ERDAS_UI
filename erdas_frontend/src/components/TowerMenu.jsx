import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function TowerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
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
        sx={{color:'white'}}
      >
       TOWER DATA
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