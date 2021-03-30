import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';

 
function Login(props) {
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [error, setError] = useState(null);
 
  // handle button click of login form
  const handleLoginUser = () => {
    setError(null);
    setLoading(true);
    axios.get('https://run.mocky.io/v3/d1bba9ac-276f-4b19-a137-f9132435014b')
    .then(response => {
      setLoading(false);
      console.log(response)
      setUserSession(response.data.identity.id, response.data.identity.login, response.data.permissions.roles[0]);
      props.history.push('/dashboard');
    })
    .catch(error => {
      setLoading(false);
     setError("Something went wrong. Please try again later.");
    });
  }

  const handleLoginUser1 = () => {
    setError(null);
    setLoading1(true);
    axios.get('https://run.mocky.io/v3/e83fd456-22ff-466f-8abf-4c796f3e6b4e')
    .then(response => {
      setLoading1(false);
      console.log(response)
      setUserSession(response.data.identity.id, response.data.identity.login, response.data.permissions.roles[0]);
      props.history.push('/dashboard');
    })
    .catch(error => {
      setLoading1(false);
     setError("Something went wrong. Please try again later.");
    });
  }
 
  return (
    <div>
    
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

      <div className="container" >

      <div className="form-container sign-in-container">
      <div className="overlay-panel overlay-left" style={{width:"100%"}}>
            <h1>Welcome Back!</h1>
            <p>Please login as Moderator</p>
            <input type="button" className="ghost black"  value={loading ? 'Loading...' : 'Login'} onClick={handleLoginUser} disabled={loading} />
          </div>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Please login as User</p>
            <input type="button" className="ghost"  value={loading1 ? 'Loading...' : 'Login'} onClick={handleLoginUser1} disabled={loading1} />
          </div>
        </div>
      </div>
    </div>



    </div>
  );
}

 
export default Login;