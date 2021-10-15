import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink, split} from "@apollo/client";
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from '@apollo/client/utilities';
import {v4 as uuidv4} from 'uuid';
import {Context2} from "./Context";

const uniqueId = uuidv4()
const makeApolloClient = () => {
    //const uniqueId = uuidv4()
    const wsLink = new WebSocketLink({
        uri: 'ws://192.168.100.4:4000/',
        options: {
            reconnect: true,
            connectionParams: {
                headers: {
                    authorization: uniqueId
                }
            }
        }
    })
    const httpLink = new HttpLink({
        uri: "http://192.168.100.4:4000", // use https for secure endpoint
        headers: {
            authorization: uniqueId
        }
    });

    const link = split(
        ({query}) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink,
    );
    return new ApolloClient({
        link,
        cache: new InMemoryCache()
    })
}

ReactDOM.render(
    <ApolloProvider client={makeApolloClient()}>
        <React.StrictMode>
            <Context2 uniqueId={uniqueId}>
                <App uniqueId={uniqueId}/>
            </Context2>
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
