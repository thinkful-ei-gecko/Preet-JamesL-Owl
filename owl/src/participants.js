import React from 'react';
// import ReactDOM from 'react-dom';
// import STORE from './STORE'
import RenderParticipants from './render-participants';
import './participants.css'


function Participant(props){

    let participantLists = props.store.map(person =>
        <RenderParticipants 
            key = {person.id}
            person ={person.avatar}
            name={person.name}
            inSession={person.inSession}
            onStage={person.onStage} />
        )
    return (
        <div className='participant-list'>
            {participantLists}      
        </div>
    )
}

export default Participant;
