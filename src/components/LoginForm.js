import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardSection, Button, Input } from './common';


class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    handleLogin = () => {
        axios.post('http://localhost:8080', this.state)
            .then(() => {
                console.log('response');
            })
            .catch(() => {
                console.log('error');
            });
     };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={email => this.setState({ email })}
                        label="Email:"
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        onChangeText={password => this.setState({ password })}
                        label="Password:"
                        value={this.state.password}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.handleLogin}>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
