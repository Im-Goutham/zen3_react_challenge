import React from 'react';
import './index.css';
import { Motion, spring } from 'react-motion';

function RowComponent(props){
    return (
        <Motion
      defaultStyle={{ scale: 0.5 }}
      style={{ scale: spring(1, { stiffness: 60, damping: 10 }) }}
    >
      {interpolatedStyle =>  <div scale={interpolatedStyle.scale} className="row" {...props}>
             {props.children}
        </div>}
    </Motion>
       
    );
  }


export default RowComponent;
