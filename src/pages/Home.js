import React from 'react';
import { Layout} from 'antd';
import HomeGreeting from '../images/HomeGreeting.svg'
import { Link } from 'react-router-dom';

const {  Content } = Layout;
 
function Home() {
   
    
  return (
    <Layout>
    <Content className="site-layout" style={{ padding: '0px', marginTop: 64, minHeight:"calc(100vH - 66px)" }}>
     
      <div className="site-layout-background" style={{ padding: 10, minHeight: 380 }}>
       <div style={{textAlign:"center"}}>
           <h1>Welcome Home</h1>
           <img src={HomeGreeting} alt="Home Greetings" style={{maxWidth:"450px", marginBottom:"25px"}} />
           <br/>
           <Link to="/login" >
           <button className="ghost black">Go To Dashboard Page</button>
            </Link>
       </div>
      </div>
    </Content>
   
  </Layout>
  );
}
 
export default Home;