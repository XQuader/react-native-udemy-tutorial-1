import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const {
        coverStyle,
        avatarStyle,
        headerContainerStyle,
        titleStyle,
        avatarContainerStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={avatarContainerStyle}>
                    <Image
                        style={avatarStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContainerStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={coverStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Text>Buy now</Text>
            </CardSection>
        </Card>
    );
};

const styles = {
    coverStyle: {
        height: 300,
        width: 0,
        flex: 1
    },
    avatarContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    avatarStyle: {
        width: 50,
        height: 50,
    },
    headerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
};

export default AlbumDetail;
