import React from 'react';
import {Button, Descriptions } from 'antd'
import ActiveCapsuleImg from '../images/active_rocket.svg'
import RetiredCapsuleImg from '../images/retired_rocket.svg'
import unknown_rocket from '../images/unknown_rocket.svg'
import moment from 'moment'

const Capsule = (props) => {
    return (
<div className="single-caps-container">
<div className="status-img">
<img src={props.status === "active" ? ActiveCapsuleImg : props.status === "retired" ? RetiredCapsuleImg : unknown_rocket } alt={props.status}/>
</div>
<Descriptions
      title="Details"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <Descriptions.Item label="Capsule ID">{props.capsule_id}</Descriptions.Item>
      <Descriptions.Item label="Serial">{props.capsule_serial}</Descriptions.Item>
      <Descriptions.Item label="Launched">{moment(props.original_launch).format('LL')}</Descriptions.Item>
      <Descriptions.Item label="Status">{props.status}</Descriptions.Item>
      <Descriptions.Item label="Landings">{props.landings}</Descriptions.Item>
      <Descriptions.Item label="Reuse count">{props.reuse_count}</Descriptions.Item>
      <Descriptions.Item label="Reuse count">{props.type}</Descriptions.Item>
      
      <Descriptions.Item label="Config Info">
        {props.details}
        {console.log(props.missions)}
      </Descriptions.Item>
      <Descriptions.Item label="Missions">{props.missions && props.missions.length > 0 ?  props.missions && props.missions.map(mission => {
          return <Button type="primary" shape="round" icon="" size="large">
          {mission.name} : {mission.flight}
        </Button>
      }) : null}</Descriptions.Item>
      
    </Descriptions>
        
        </div>
    );
}

export default Capsule;
