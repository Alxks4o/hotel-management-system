import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  
  useEffect(()=>{

    axios
    .get('http://localhost:3001/')
    .then((res) =>{
      setMessage(res.data)})   
    .catch(error => console.error('Error in fetching data',error))
    })


  return (
    <div className='App'>
      <h1>I am your master!</h1>
      <div>{message}</div> 
    </div>
  )
}

export default App;
