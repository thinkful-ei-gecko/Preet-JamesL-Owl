import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Participant from './participants';
import STORE from './store/STORE'

ReactDOM.render(<Participant store={STORE}/>, document.getElementById('root'));

