import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import participant from './participants';
import STORE from './store/STORE'

ReactDOM.render(<App store={STORE} />, document.getElementById('root'));

