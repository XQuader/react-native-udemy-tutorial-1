import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ children }) => (
    <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>{children}</Text>
    </View>
);

const styles = {
    headerStyle: {
        height: 60,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };
