import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import animationData from '../assets/error.json';

const ErrorPage = () => {
  return (
        <div className='d-flex flex-column justify-content-center 
        align-items-center vh-100 bg-white text-center'>
            <div style={{maxWidth: '400px'}}>
                <Lottie animationData={animationData} loop={true}/>
                <h2 className='mt-4'>Oops! 404 Page Not Found!</h2>
                <p>The page you are looking for either doesn't exist or an error has occurred</p>
                <Link to='/login'>
                <button className='btn btn-primary mt-3 px-4 py-2'>
                    Go back home 
                </button>
                </Link>
            </div>
        </div>
  )
}

export default ErrorPage
