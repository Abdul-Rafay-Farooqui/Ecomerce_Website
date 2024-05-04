import React, { useContext, useState } from 'react';
import { Button, Card, CardContent, Input, Typography } from '@mui/material';
import "../components/Other.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import { Toaster, toast } from 'react-hot-toast';


const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {

    const data = {
        "email": email,
        "password" : password, 
    }
    axios.post("http://localhost:5000/api/login",data, {
      ContentType : "application/json"
    })
    .then((res) => {
      toast.success(`Login Successfully.\nWelcome Back! ${res?.data?.user?.name}.`,
        {
          duration: 3000,
          style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
        }
      )
        // login(res?.data?.user);

    })
    .catch((err) => {
      toast.error(`Error: ${err?.response?.data?.error}`,
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

  const cardStyle = {
    backgroundColor: "#242424",
    maxWidth: 400,
    textAlign: 'center',
    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    padding: "20px",
    color: "#fff",
    margin: "auto", 
  };

  const inputStyle = {
    paddingTop: "20px",
    marginBottom: '10px',
    width: "80%",
    color: "#fff",
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Card style={cardStyle}>
        <CardContent>
          <Typography>
            <h2>
              Log in to Exclusive
            </h2>
          </Typography>
          <Typography>
            <p>
              Enter your details below
            </p>
          </Typography>
          <Input
            style={inputStyle}
            type='Email'
            placeholder='Email or Phone Number'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            style={inputStyle}
            type='Password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='login-div'>
            <Button
              style={{ backgroundColor: "#fff", color: "#242424" }}
              onClick={onSubmit}
            >
              Log In
            </Button>
            <Link className='link-log'>Forget Password?</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LogIn;
