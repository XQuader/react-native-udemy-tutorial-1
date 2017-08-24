import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    handleRowPress = () => {
        const { employee } = this.props;

        Actions.employeeEdit({ employee });
    };

    render() {
        const { employee } = this.props;

        return (
            <TouchableWithoutFeedback onPress={this.handleRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{employee.name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;