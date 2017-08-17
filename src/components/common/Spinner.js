import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => (
    <View style={styles.spinnerStyle}>
        <ActivityIndicator
            size={props.size || 'large'}
        />
    </View>
);

const styles = {
    spinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
};

export { Spinner };
