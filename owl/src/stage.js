import React from 'react';
import './styles/stage.css'


function Stage(props){
    if(props.onStage)
    return(
        <div class="main-container">
            <div class="name-container">
                <h3>{props.name}</h3>
            </div>
            <div class="avatar-container">
                <img src={props.avatar} alt="avatar"></img>
            </div>
        </div>
    )
}

export default Stage