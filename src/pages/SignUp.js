import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, FormControlLabel, Input, Radio, RadioGroup, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import "../components/Other.css";
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import { Toaster, toast } from 'react-hot-toast';

const SignUp = () => {

        const [name, setName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [gender, setGender] = useState(''); // State to manage the selected gender
      
        const handleGenderChange = (event) => {
          setGender(event.target.value);
        };

        const onSubmit = () => {

            const data = {
                "name": name,
                "phone_number": phoneNumber,
                "email": email,
                "password" : password, 
                "gender" : gender
            }

            axios.post("http://localhost:5000/api/register",data, {
                ContentType : "application/json"
            })
            .then((res) => {
                console.log("first")
                toast.success(`Account Created Successfully.\nWelcome ${res?.data?.user}`,
                    {
                        duration: 3000,
                        style: {
                            marginTop: '50px',
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                          },
                    }
                )
                // login(res?.data?.user);
            })
            .catch((err) => {
                toast.error(`Error: ${err?.response?.data}`,
                    {
                        duration: 3000,
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                          },
                    }
                )
                console.log(err)
            })
        }


  return (
        <>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
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
                    values={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    sx={{paddingTop: "20px",marginBottom: '10px' , width: "80%" , color:"#fff" }}
                    type='PhoneNumber'
                    placeholder='PhoneNumber'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <Input
                      sx={{paddingTop: "20px",marginBottom: '10px', width: "80%" , color:"#fff"}}
                    type='Email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                      sx={{paddingTop: "20px",marginBottom: '10px' , width: "80%" , color:"#fff"}}
                      type='Password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <RadioGroup sx={{ flexDirection: 'row', justifyContent: 'center',paddingTop:"20px",marginBottom: '10px' }} value={gender} onChange={handleGenderChange} required>
                 <Typography sx={{padding:"9px"}}>Gender :</Typography>   
                <FormControlLabel value="Male" control={<Radio color="default" />} label="Male" sx={{ color: "#fff" }} />
                <FormControlLabel value="Female" control={<Radio color="default" />} label="Female" sx={{ color: "#fff" }} />
                <FormControlLabel value="Other" control={<Radio color="default" />} label="Other" sx={{ color: "#fff" }} />
                </RadioGroup>
                    <Button sx={{width:"100%",backgroundColor:"#fff" , color:"#242424", marginTop:"20px", ":hover": {color:"#fff"}}} onClick={onSubmit}>
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