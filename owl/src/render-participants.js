import React from 'react';
//import ReactDOM from 'react-dom';

function RenderParticipants(props){
    return (
        <li key={props.id}>
            <img src={props.avatar} alt="avatar"></img>
            <h3>{props.name}</h3>
            <p>{props.inSession ? 'in-session' : 'left-session'}</p>
            <p>{props.onStage ? 'on-stage' : ''}</p>
        </li>
    )
}

export default RenderParticipants;