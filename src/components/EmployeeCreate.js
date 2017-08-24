import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
    updater = prop => value => this.props.employeeUpdate({ prop, value });
    updateName = this.updater('name');
    updatePhone = this.updater('phone');
    updateShift = this.updater('shift');

    employeeCreate = () => {
        const { name, phone, shift } = this.props;

        if (name && phone) {
            this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
        }
    };

    renderPickerItems() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return days.map(day => <Picker.Item label={day} value={day} key={day} />);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={this.updateName}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={this.updatePhone}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 10 }}
                        selectedValue={this.props.shift}
                        onValueChange={this.updateShift}
                    >
                        {this.renderPickerItems()}
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.employeeCreate}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 4,
        alignSelf: 'center'
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
