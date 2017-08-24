import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.empoyeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }


    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.datasource = ds.cloneWithRows(employees);
    }

    renderEmployee(employee) {
        return (
            <ListItem key={employee.uid} employee={employee} />
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.datasource}
                renderRow={this.renderEmployee}
            />
        );
    }

    componentWillUnmount(){
        this.props
    }
}

const styles = {
    employeeTextStyle: {}
};

const mapStateToProps = ({ employees }) => ({
    employees: _.map(employees, (employee, uid) => ({ ...employee, uid }))
});

export default connect(mapStateToProps, { empoyeesFetch: employeesFetch })(EmployeeList);
