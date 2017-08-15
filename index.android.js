import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

class App extends Component {
    render() {
        return (
            <Header>Albums!</Header>
        );
    }
}

AppRegistry.registerComponent('NativeTutorial', () => App);
