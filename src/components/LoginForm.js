import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    handleLogin = () => {
        const { email, password } = this.state;

        this.setState({ error: '' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Logged in');
            })
            .catch(() => {
                console.log('Bad login data, attempt to create user');
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('User is created');
                    })
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' });
                        console.log('Error creating user');
                    });
            });
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={email => this.setState({ email })}
                        label="Email:"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        onChangeText={password => this.setState({ password })}
                        label="Password:"
                        placeholder="password"
                        secureTextEntry
                        value={this.state.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    <Button onPress={this.handleLogin}>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
