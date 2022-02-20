import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink, split} from "@apollo/client";
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from '@apollo/client/utilities';
import {v4 as uuidv4} from 'uuid';
import {Provider} from "./Context";

ReactDOM.render(
            <Provider>
                <App/>
            </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
