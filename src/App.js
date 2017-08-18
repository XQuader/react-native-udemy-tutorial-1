import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, CardSection, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';

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
                <Header>Manager</Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
