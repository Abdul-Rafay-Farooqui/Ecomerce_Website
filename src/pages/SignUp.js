import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, FormControlLabel, Input, Radio, RadioGroup, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import "../components/Other.css";


const SignUp = () => {

        const [gender, setGender] = useState(''); // State to manage the selected gender
      
        const handleGenderChange = (event) => {
          setGender(event.target.value);
        };
  return (
        <>
        <Card sx={{margin:"50px auto", backgroundColor:"#242424" , padding: "10px",  maxWidth: 450 , textAlign: 'center' ,  boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;" }}>
                    <CardContent sx={{color:"#fff"}}>
                    <Typography >
                        <h2>
                             Create An Account
                        </h2>
                </Typography>
                <Typography>
                    <p>
                    Enter Your Details Below
                    </p>
                </Typography>
                <Input
                    sx={{paddingTop: "20px",marginBottom: '10px' , width: "80%" , color:"#fff" }}
                    type='Name'
                    placeholder='Name'
                />
                <Input
                    sx={{paddingTop: "20px",marginBottom: '10px' , width: "80%" , color:"#fff" }}
                    type='PhoneNumber'
                    placeholder='PhoneNumber'
                />
                <Input
                      sx={{paddingTop: "20px",marginBottom: '10px', width: "80%" , color:"#fff"}}
                    type='Email'
                    placeholder='Email'
                />
                <Input
                      sx={{paddingTop: "20px",marginBottom: '10px' , width: "80%" , color:"#fff"}}
                      type='Password'
                    placeholder='Password'
                />
                
                <RadioGroup sx={{ flexDirection: 'row', justifyContent: 'center',paddingTop:"20px",marginBottom: '10px' }} value={gender} onChange={handleGenderChange}>
                 <Typography sx={{padding:"9px"}}>Gender :</Typography>   
                <FormControlLabel value="male" control={<Radio color="default" />} label="Male" sx={{ color: "#fff" }} />
                <FormControlLabel value="female" control={<Radio color="default" />} label="Female" sx={{ color: "#fff" }} />
                <FormControlLabel value="other" control={<Radio color="default" />} label="Other" sx={{ color: "#fff" }} />
                </RadioGroup>
                    <Button sx={{width:"100%",backgroundColor:"#fff" , color:"#242424", marginTop:"20px", ":hover": {color:"#fff"}}}>
                        Create Account
                    </Button>
                    <Button sx={{width:"100%",backgroundColor:"#fff" , color:"#242424", marginTop:"20px", ":hover": {color:"#fff"}}}>
                        <GoogleIcon sx={{marginBottom: "5px"}}/> Sign Up with Google
                    </Button>
                    <Typography sx={{marginTop:"20px", color:"#fff"}}>
                        Already Have Account? <Link to='/log-in' className='login'>Log in</Link>
                    </Typography>
                    </CardContent>
                </Card>
        </>
  )
}

export default SignUp