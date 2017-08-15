import React from 'react';
import { Text, View, Image} from 'react-native';

const AlbumDetail = ({ album }) => {
    const { viewStyle, imageStyle } = styles;
    const pic = {
        uri: album.image
    };

    return (
        <View style={viewStyle}>
            <Text>Artist: {album.artist}</Text>
            <Text>Title: {album.title}</Text>
            <Image source={pic} style={imageStyle} />
        </View>
    );
};

const styles = {
    viewStyle: {
        alignItems: 'center',
        elevation: 1,
        marginBottom: 2
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginBottom: 2
    }
};

export default AlbumDetail;
