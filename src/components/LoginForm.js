import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
    handleEmailChange = (email) => {
        this.props.emailChanged(email);
    };

    handlePasswordChange = (password) => {
        this.props.passwordChanged(password);
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.handleEmailChange}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.handlePasswordChange}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
   email: auth.email,
   password: auth.password
});

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
