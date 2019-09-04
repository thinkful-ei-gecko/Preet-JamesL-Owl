import React from 'react';
import RenderParticipants from './render-participants';


function Stage(props){
    // let participantOnStage = props.store.map(person => person.onStage ?
    //     <div className="stage" key={person.id}>
    //     <h3>name={person.name}</h3>
    //     <img src={person.avatar} alt="avatar"></img>
    //     </div>: " ");
    let participantOnStage = props.store.map(person =>
        <RenderParticipants 
            key = {person.id}
            person ={person.avatar}
            name={person.name}
            inSession={person.inSession}
            onStage={person.onStage} />
        )
    return(
        <div className="main-container">
            {participantOnStage}
        </div>
    )
}

export default Stage;