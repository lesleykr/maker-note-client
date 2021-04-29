import React, { useState, useEffect } from 'react'
import './App.css'
import Auth from './auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState(''); 

  useEffect(() => { 
  if(localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  };
  }, [])
  
  const updateToken = (newToken) => { 
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
  }
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }
  
  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
  //   : <Auth updateToken={updateToken}/>)
  // }

  return (
    <div className="App">
<input />
<Auth updateToken={updateToken}/>
          </div>
  )
}

export default App
