import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import "./Other.css";

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#242424',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };



  return (
    <Box component="footer" style={footerStyle}>
      <Grid container  spacing={2} justifyContent="center">
        <Grid item xs={3} >
          <Typography>

          <h3>Get to Know us</h3>
          <h5 className='h5'>Careers</h5>
              <h5 className='h5'>Blogs</h5>
             <h5 className='h5'>About ARSHOPS</h5>
             <h5 className='h5'>Investor Relations</h5>
             <h5 className='h5'>ARSHOHS Devices</h5>
            <h5 className='h5'>ARSHOHS Science</h5>

          </Typography>
        </Grid>
        <Grid item xs={3} >
          <Typography>

          <h3>Make Money with Us</h3>
          <h5 className='h5'>Sell products</h5>
             <h5 className='h5'>Sell Apps</h5>
             <h5 className='h5'>Become an Affiliate</h5>
             <h5 className='h5'>Advertise your product</h5>
             <h5 className='h5'>Host</h5>
              <h5 className='h5'>Publish</h5>
          </Typography>
        </Grid>
        <Grid item xs={3} >
          <Typography>

          <h3>ARSHOPS Payments</h3>
          <h5 className='h5'>Business Card</h5>
             <h5 className='h5'>Shop with points</h5>
             <h5 className='h5'>Reload your balance</h5>
             <h5 className='h5'>Currency Converter</h5>
          </Typography>
        </Grid>
        <Grid item xs={3} >
          <Typography>

          <h3>Let Us Help You</h3>
          <h5 className='h5'>Your Account</h5>
             <h5 className='h5'>Your Order</h5>
             <h5 className='h5'>Shipping Rates</h5>
             <h5 className='h5'>Return & Replacement</h5>
             <h5 className='h5'>Manage your devices</h5>
             <h5 className='h5'>Help</h5>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;









// import React from 'react';
// import Box from '@mui/material/Box';
// import "./Other.css";
// import { Grid } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: '#242424',
//         color: '#fff',
//         padding: '20px',
//         textAlign: 'center',
//       }}
//     >
//       <Grid container className='footer'  spacing={19} p={2}>
//         <Grid item>
//             <h3>Get to Know us</h3>
//             <h5>Careers</h5>
//             <h5>Blogs</h5>
//             <h5>About ARSHOPS</h5>
//             <h5>Investor Relations</h5>
//             <h5>ARSHOHS Devices</h5>
//             <h5>ARSHOHS Science</h5>
//         </Grid>
//         <Grid item>
//             <h3>Make Money with Us</h3>
//             <h5>Sell products</h5>
//             <h5>Sell Apps</h5>
//             <h5>Become an Affiliate</h5>
//             <h5>Advertise your product</h5>
//             <h5>Host</h5>
//             <h5>Publish</h5>
//         </Grid>
//         <Grid item>
//             <h3>ARSHOPS Payments</h3>
//             <h5>Business Card</h5>
//             <h5>Shop with points</h5>
//             <h5>Reload your balance</h5>
//             <h5>Currency Converter</h5>
//         </Grid>
//         <Grid item>
//             <h3>Let Us Help You</h3>
//             <h5>Your Account</h5>
//             <h5>Your Order</h5>
//             <h5>Shipping Rates</h5>
//             <h5>Return & Replacement</h5>
//             <h5>Manage your devices</h5>
//             <h5>Help</h5>
//         </Grid>
        
//       </Grid>
      
//     </Box>
//   );
// };


