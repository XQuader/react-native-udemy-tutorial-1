import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Album Detail</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#ddd',
        alignItems: 'center'
    }
};

export default AlbumDetail;
