import React from 'react';
// import ReactDOM from 'react-dom';
import STORE from './STORE'


function Participant(props){
    let participantLists = props.STORE.map(person => 
    <Participant 
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
