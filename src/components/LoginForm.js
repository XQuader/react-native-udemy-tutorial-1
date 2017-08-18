import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    handleLogin = () => {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess)
                    .catch(this.onLoginFail);
            });
    };

    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    };

    onLoginFail = () => {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    };

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }

        return <Button onPress={this.handleLogin}>Log in</Button>;
    }

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
                <CardSection>{this.renderButton()}</CardSection>
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
