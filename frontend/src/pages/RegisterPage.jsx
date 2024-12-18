import React from 'react'
import {
    TextField,
    Button,
    IconButton,
    Visibility, 
    VisibilityOff
} from '@mui/material' //to make our form
import '../styles/AuthStyle.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [sname, setSname] = useState('');
    const [loading, setLoading] = useState(false)
    
        
    const handleFnameChange = (event) => {
        setFname(event.target.value)
    }

    const handleSnameChange = (event) => {
        setSname(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    return (
    <div>
       <div className='auth-page d-flex justify-content-center align-items-center vh-100'>
              <div className='card p-4 m-4 shadow rounded'>
                  <div className='text-center mb-4'>
                      <img src="/logo512.png" alt="logo" width="80"/>
                  </div>
                  <h3 className='text-center mb-3 text-primary font-bold'>Register</h3>
                  <form>
                      <TextField label='First Name' type='text' variant='outlined' margin='normal' value={fname} onChange={handleFnameChange} fullWidth/>
                      <TextField label='Last Name' type='text' variant='outlined' margin='normal' value={sname} onChange={handleSnameChange} fullWidth/>
                      <TextField label='Email' type='email' variant='outlined' margin='normal' value={email} onChange={handleEmailChange} fullWidth/>
                      <TextField label='Password' type='password' variant='outlined' margin='normal' value={password} onChange={handlePasswordChange} fullWidth/>
                      <div>
                            <div className='mt-2'>
                                <Link>
                                    <Button className='px-3 py-2 rounded-3' variant='contained' color='primary' fullWidth>
                                        {loading ? "Registering...":"Register"}
                                    </Button>
                                </Link>
                            </div>
                            <div className='mt-3'>
                                <Link to='/login'>
                                    <Button className='px-3 py-2 rounded-3' variant='outlined' color='secondary' type='submit' fullWidth>
                                        Already a member
                                    </Button> 
                                </Link>
                            </div>
                      </div>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default RegisterPage
