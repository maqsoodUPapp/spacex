import React from 'react';
import {Link} from 'react-router-dom'
import ActiveCapsuleImg from '../images/active_rocket.svg'
import RetiredCapsuleImg from '../images/retired_rocket.svg'
import unknown_rocket from '../images/unknown_rocket.svg'
import '../css/capsule.css'
import { Col } from 'antd';

const Capsule = (props) => {
    return (
        <Col lg={6} md={8} sm={12} xs={24}>
            <Link to={`/dashboard/${props.capsule_serial}`}>
            <div className="card">
            <div className="capsule-header">
                <div className="capsule-id">
                    <p><span className="capsule-label"> Capsule ID </span>: {props.capsule_id}</p>
                </div>
                <div className="capsule-serial right">
                <p><span className="capsule-label"> Serial </span>: {props.capsule_serial}</p>
                </div>
            </div>
            <div className="capsule-body">
                <div className="capsule-status">
                    <img src={props.status === "active" ? ActiveCapsuleImg : props.status === "retired" ? RetiredCapsuleImg : unknown_rocket } alt={props.status}/>
                </div>
                <div className="capsule-details">
                    <p>
                        {props.details}
                    </p>

                </div>

            </div>
            <div className="capsule-footer">
                <div className="capsule-landing">
                <p><span className="capsule-label"> Landings</span>: {props.landings}</p>
                </div>
                <div className="capsule-status-text">
                <p><span className="capsule-label"> Status</span>: {props.status}</p>
                </div>                
            </div>
            <div className="capsule-launch-date">
                <p><span className="capsule-label"> Launched</span>: {props.original_launch}</p>
                </div>
        </div>
        </Link>
        </Col>
    );
};



export default Capsule;
