import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection } from './common';
import * as actions from '../actions';

class LibraryList extends Component {
    componentWillMount() {
        this.props.fetchLibraries();
    }

    render() {
        return (
            <Card>
                {this.props.libraries.map(lib => <CardSection key={lib.id}><Text>{lib.title}</Text></CardSection>)}
            </Card>
        );
    }
}

function mapStateToProps({ libraries, selected }) {
    return { libraries, selected };
}

export default connect(mapStateToProps, actions)(LibraryList);
