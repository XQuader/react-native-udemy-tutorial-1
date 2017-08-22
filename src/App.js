import React, { Component } from 'react';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCPL868sIN8BY_nlSiZj6YSmIf_f-9knI8',
            authDomain: 'manager-92f46.firebaseapp.com',
            databaseURL: 'https://manager-92f46.firebaseio.com',
            projectId: 'manager-92f46',
            storageBucket: 'manager-92f46.appspot.com',
            messagingSenderId: '1096667969153'
        });
    }

    render() {
        return (
            <Router />
        );
    }
}

export default App;
