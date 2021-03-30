import React, {useState, useEffect} from 'react';
import { Layout } from 'antd';
import {getData} from '../services/api'
import Capsule from '../components/SingleCapsule'
import { Row, Spin, Space } from 'antd';

const { Content } = Layout;

const SuperUser = (props) => {

    const [loading, setLoading] = useState(true)
    const [spaceData, setSpaceData] = useState([])

    useEffect(() => {
        getData('https://api.spacexdata.com/v3/capsules')
        .then((res) => {
            console.log(res)
            setSpaceData(res.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])

    return (<>
    {loading ? <Space size="middle"><Spin size="large" /></Space>  :  <Content className="site-layout" style={{ padding: '0px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, marginTop:"65px" }}>
       <Row gutter={16} justify="center" align="top">
       {spaceData && spaceData.map(data => {
           return <Capsule 
           capsule_id={data.capsule_id}
           capsule_serial={data.capsule_serial}
           status={data.status}
           details={data.details}
           landings={data.landings}
           original_launch={data.original_launch}
            />
       })}
       </Row>
       
      </div>
    </Content>
    }
   </>);
}

export default SuperUser;
