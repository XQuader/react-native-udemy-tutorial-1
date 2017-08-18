import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component {
    constructor(props) {
        super(props);

        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDecription() {
        const { library, isSelected } = this.props;

        if (isSelected) {
            return (
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { id, title } = this.props.library;
        const { titleStyle } = styles;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection key={id}>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDecription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {

    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        padding: 10
    }
};

const mapStateToProps = (state, ownProps) => ({ isSelected: state.selectedLibraryId === ownProps.library.id });

export default connect(mapStateToProps, { selectLibrary })(ListItem);
