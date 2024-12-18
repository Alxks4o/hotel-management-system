import React from 'react'
import {
    TextField,
    Button,
    IconButton
    
} from '@mui/material' //to make our form
import {
    Visibility, 
    VisibilityOff
} from '@mui/material'  //for icon in password
import '../styles/AuthStyle.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
       
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }


  return (
    <div className='auth-page d-flex justify-content-center align-items-center vh-100'>
        <div className='card p-4 m-4 shadow rounded'>
            <div className='text-center mb-4'>
                <img src="/logo512.png" alt="logo" width="80"/>
            </div>
            <h3 className='text-center mb-3 text-primary font-bold'>Login</h3>
            <form>
                <TextField label='Email' type='email' variant='outlined' margin='normal' value={email} onChange={handleEmailChange} fullWidth/>
                <TextField label='Password' type='password' variant='outlined' margin='normal' value={password} onChange={handlePasswordChange} fullWidth/>
                <div>
                <div className='mt-3'>
                    <Button className='px-3 py-2 rounded-3' variant='contained' color='primary' type='submit' fullWidth>
                        {loading ? "Logging in..." : "Log in"}
                    </Button> 
                </div>
                    <div className='text-center mt-3'>
                        <Link to='/register'>
                            <Button className='px-3 py-2 rounded-3' variant='outlined' color='secondary' fullWidth>
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
