import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { id, title, description } = this.props.library;
        const { titleStyle } = styles;

        return (
            <CardSection key={id}>
                <Text style={titleStyle}>{title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {

    },
    activeStyle: {

    }
};

const mapStateToProps = ({ selectedLibraryId }) => ({ selectedLibraryId });

export default connect(mapStateToProps)(ListItem);
