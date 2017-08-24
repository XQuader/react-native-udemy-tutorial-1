import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    handleCreate = () => {
        const { name, phone, shift } = this.props;

        if (name && phone) {
            this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
        }
    };

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.handleCreate}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
