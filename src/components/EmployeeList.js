import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
    render() {
        return (
            <View>
                <Text>Employee 1</Text>
                <Text>Employee 2</Text>
                <Text>Employee 3</Text>
                <Text>Employee 4</Text>
                <Text>Employee 5</Text>
                <Text>Employee 6</Text>
            </View>
        );
    }
}

export default EmployeeList;