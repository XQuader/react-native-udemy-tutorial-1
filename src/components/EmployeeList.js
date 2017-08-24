import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { empoyeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.empoyeesFetch();
    }

    renderEmployee({ name, phone, shift }, id) {
        return <Text key={id}>{name}</Text>;
    }

    render() {
        return (
            <View>
                {_.map(this.props.employees, this.renderEmployee)}
            </View>
        );
    }
}

const mapStateToProps = ({ employees }) => ({ employees });

export default connect(mapStateToProps, { empoyeesFetch })(EmployeeList);
