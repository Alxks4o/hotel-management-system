import React, { useState } from 'react'
import { TextField, Button, IconButton} from '@mui/material'
import { Visibility, VisibilityOff} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import '../styles/AuthStyle.css'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleLogin = () => {
    };

}

export default LoginPage
