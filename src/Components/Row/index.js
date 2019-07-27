import React from 'react';
import './index.css';


function RowComponent(props){
    return ( <div className="row" {...props}>
             {props.children}
        </div>
    );
  }


export default RowComponent;
