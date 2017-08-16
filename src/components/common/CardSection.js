import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => <View style={styles.containerStyle}>{props.children}</View>;

const styles = {
    containerStyle: {
        padding: 5,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
};

export { CardSection };
