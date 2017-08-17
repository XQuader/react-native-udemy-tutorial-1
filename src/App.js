import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>Tech Stack</Header>
                <LibraryList />
            </View>
        );
    }
}

export default App;
