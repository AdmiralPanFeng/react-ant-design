import React from 'react';
import ReactDOM from 'react-dom';
import {Router,hashHistory} from 'react-router';
import {appRoute} from './router/router';
ReactDOM.render(
    <Router routes={appRoute}  history={hashHistory}/>,
    document.getElementById('root'));