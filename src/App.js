import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        authenticated: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCW83VRgAVg8bKT7mFkQC-HDQsKE3cbv7Y',
            authDomain: 'auth-10be6.firebaseapp.com',
            databaseURL: 'https://auth-10be6.firebaseio.com',
            projectId: 'auth-10be6',
            storageBucket: 'auth-10be6.appspot.com',
            messagingSenderId: '690980646747'
        });

        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ authenticated: !!user });
        });
    }

    renderContent() {
        switch (this.state.authenticated) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <CardSection>
                        <Spinner />
                    </CardSection>
                );
        }
    }

    render() {
        return (
            <View>
                <Header>Authentication</Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
