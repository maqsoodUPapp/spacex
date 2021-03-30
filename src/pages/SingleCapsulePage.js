import React, {useState, useEffect} from 'react';
import {getData} from '../services/api'
import { getUser, removeUserSession } from '../Utils/Common';
import { Layout, Spin, Space  } from 'antd';
import Capsule from '../components/Capsule'

const { Header, Content } = Layout;


const SingleCapuse = (props) => {
 
    const [loading, setLoading] = useState(true)
    const [capsuleData, setCapsuleData] = useState({})
    

    useEffect(() => {
        getData(`https://api.spacexdata.com/v3/capsules/${props.match.params.serial_no}`)
        .then((res) => {
           
            setCapsuleData(res.data)
            setLoading(false)
           
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })

    }, [props, loading, capsuleData])

    const user = getUser();
  // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }



    return (
        <>
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%',marginTop:"20px", color:"#fff" }}>
      <div className="logo" style={{float:"left" }}> Hi {user}! </div>
     
      <input  type="button"  className="logout-button" onClick={handleLogout} value="Logout" />
     
      
    </Header>
    <Content style={{ padding: '65px 0px',height:"100vH" }}>
    {loading ? <Space size="middle"><Spin size="large" ></Spin></Space>  :   <Capsule
     capsuleData
    capsule_id={capsuleData.capsule_id}
    capsule_serial={capsuleData.capsule_serial}
    status={capsuleData.status}
    details={capsuleData.details}
    missions={capsuleData.missions}
    type={capsuleData.type}
    reuse_count={capsuleData.reuse_count}
    landings={capsuleData.landings}
    original_launch={capsuleData.original_launch}

      /> }
  
    </Content>
   
    </Layout>
        </>
    );
}

export default SingleCapuse;
