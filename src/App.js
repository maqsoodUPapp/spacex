import React, { useEffect} from 'react';
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import SingleCapuse from './pages/SingleCapsulePage'
import { getToken, setUserSession, removeUserSession } from './Utils/Common';
import 'antd/dist/antd.css'


 
function App() {


    useEffect(() => {
        const token = getToken();
        if (!token) {
          return;
        }
     
        axios.get(`https://run.mocky.io/v3/89d674b8-dee4-47fc-829b-c670d54a0462`).then(response => {
          console.log(response)
          setUserSession(response.data[token].identity.id, response.data[token].identity.login, response.data[token].permissions.roles[0]);
         
         
        }).catch(error => {
          removeUserSession();
          
        });
      }, []);


  return (
    <div className="App">
      <BrowserRouter>
    
        <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute path="/dashboard/:serial_no" component={SingleCapuse} exact />
        </Switch>
         
      </BrowserRouter>
    </div>
  );
}
 
export default App;