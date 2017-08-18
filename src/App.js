import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    state = {
        authenticated: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCPL868sIN8BY_nlSiZj6YSmIf_f-9knI8',
            authDomain: 'manager-92f46.firebaseapp.com',
            databaseURL: 'https://manager-92f46.firebaseio.com',
            projectId: 'manager-92f46',
            storageBucket: 'manager-92f46.appspot.com',
            messagingSenderId: '1096667969153'
        });

        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ authenticated: !!user });
        });
    }

    render() {
        return (
            <View>
                <Header>Manager</Header>
            </View>
        );
    }
}

export default App;
