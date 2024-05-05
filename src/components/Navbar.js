import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:850px)');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const sideList = () => (
    <div style={{ width: 230 , }}>
      <CloseIcon onClick={toggleDrawer} sx={{float:"right", fontSize:"2rem", padding: "1rem", cursor: "pointer"}}/>
      <Link to="/" className='side-link' onClick={toggleDrawer}>Home</Link>
      <Link to="/products" className='side-link' onClick={toggleDrawer}>Product</Link>
      <Link to="/signup" className='side-link' onClick={toggleDrawer}>SignUp</Link>
    </div>
  );

  const cartItemQty = useSelector(state=>state.cart.items.length)

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#ffff' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              sx={{color: "#242424"}}
              edge="start"
              aria-label="menu"
              style={{ marginRight: '16px' }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <StoreIcon fontSize="large" style={{ color: '#242424' }} />
          <Typography variant="h5" component="div" style={{ flexGrow: 1, color: '#242424' }}>
            ARSHOPS
          </Typography>

          <InputBase
            placeholder="    Search..."
            style={{
              marginLeft: '2rem',
              backgroundColor: '#242424',
              color: '#fff',
              borderRadius: '5px',
              width: '40%',
              height: '3rem',
              marginRight:"0.3rem"

            }}
          />
          <SearchIcon sx={{borderRadius:"5px" ,height:"3rem",color: '#242424', fontSize: '2rem', marginRight: '3rem',":hover":{backgroundColor:"#242424", color:"white"} }} />

          {!isMobile && (
            <React.Fragment>
              <Link className="nav-links" to="/">
                Home
              </Link>
              <Link className="nav-links" to="/products">
                Products
              </Link>
              <Link className="nav-links" to="/signup">
                SignUp
              </Link>
            </React.Fragment>
          )}
              <Link className="nav-icon-mobile" to="/cart">
                <ShoppingCartIcon style={{ fontSize: '30px' }} />
                <p className='badge'>
                  {cartItemQty}
                </p>
              </Link>
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          {sideList()}
        </Drawer>
      )}
    </div>
  );
};

export default Navbar;
