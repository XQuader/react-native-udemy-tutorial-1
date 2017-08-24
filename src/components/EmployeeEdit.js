import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeSave, employeeFire, employeeUpdate, employeeClear } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    state = { fireModalVisible: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => this.props.employeeUpdate({ prop, value }));
    }

    handleSave = () => {
        const { name, phone, shift } = this.props;

        if (name && phone) {
            this.props.employeeSave({ name, phone, shift: shift || 'Monday', uid: this.props.employee.uid });
        }
    };

    setModalVisibility = (visible) => {
        this.setState({ fireModalVisible: visible });
    };

    handleAcceptFire = () => {
        const { uid } = this.props.employee;

        this.props.employeeFire(uid);
        this.setModalVisibility(false);
    };

    handleDeclineFire = () => this.setModalVisibility(false);

    handleFire = () => this.setModalVisibility(true);

    handleText = () => {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    };

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.handleSave}>Save</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.handleText}>Text</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.handleFire}>Fire</Button>
                </CardSection>
                <Confirm
                    onAccept={this.handleAcceptFire}
                    onDecline={this.handleDeclineFire}
                    visible={this.state.fireModalVisible}
                >Are you sure you want to fire employee?</Confirm>
            </Card>
        );
    }

    componentWillUnmount() {
        this.props.employeeClear();
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeSave, employeeFire, employeeUpdate, employeeClear })(EmployeeCreate);

