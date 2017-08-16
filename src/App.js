import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCW83VRgAVg8bKT7mFkQC-HDQsKE3cbv7Y',
            authDomain: 'auth-10be6.firebaseapp.com',
            databaseURL: 'https://auth-10be6.firebaseio.com',
            projectId: 'auth-10be6',
            storageBucket: 'auth-10be6.appspot.com',
            messagingSenderId: '690980646747'
        });
    }

    render() {
        return (
            <View>
                <Header>Authentication</Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;
