import React from 'react';
import { getUser, getRole, removeUserSession } from '../Utils/Common';
import ModeratorUser from '../components/SuperUser'
import User from '../components/User'
import { Layout } from 'antd';

const { Header } = Layout;

function Dashboard(props) {

    const user = getUser();
    const role = getRole();
  // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }
    
  return (
    <div>
         <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%',marginTop:"20px", color:"#fff" }}>
      <div className="logo" style={{float:"left" }}> Hi {user}! </div>
     <div style={{textAlign:"right"}}>
      <span style={{marginRight:"10px"}}> UserRole : {role} </span> 
      <input  type="button"  className="logout-button" onClick={handleLogout} value="Logout" />
     </div>
     
      
    </Header>
      {role === 'moderator' ? <ModeratorUser username={user} /> : role === 'User' ? <User username={user} /> : '' }
      
  </Layout>
    </div>
  );
}
 
export default Dashboard;