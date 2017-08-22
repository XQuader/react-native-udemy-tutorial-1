import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { Spinner } from './common/Spinner';


class LoginForm extends Component {
    handleEmailChange = (email) => {
        this.props.emailChanged(email);
    };

    handlePasswordChange = (password) => {
        this.props.passwordChanged(password);
    };

    handleLoginPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    };

    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner />;
        }

        return <Button onPress={this.handleLoginPress}>Login</Button>;
    }

    render() {
        const { errorTextStyle } = styles;

        return (
            <View style={{ backgroundColor: '#fff' }}>
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
                    {this.props.error ? <Text style={errorTextStyle}>{this.props.error}</Text> : null}
                    <CardSection>
                        {this.renderLoginButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
