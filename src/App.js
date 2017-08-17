import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Card, CardSection, Button } from './components/common';

class App extends Component {
    render() {
        return (
            <View>
                <Header>Tech Stack</Header>
                <Card>
                    <CardSection>
                        <Button>Click me</Button>
                    </CardSection>
                    <CardSection>
                        <Button>Stop me</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default App;
