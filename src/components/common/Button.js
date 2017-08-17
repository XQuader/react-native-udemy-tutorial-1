import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
            <Text style={styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>
    );

const styles = {
    buttonStyle: {
        marginLeft: 5,
        marginRight: 5,
        borderColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 16,
        padding: 10,
        color: '#007aff'
    }
};

export { Button };
