import React from 'react';
import { View } from 'react-native';

const Card = (props) => <View style={styles.containerStyle}>{props.children}</View>;

const styles = {
    containerStyle: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        borderColor: '#ddd',
        elevation: 1
    }
};

export { Card };
