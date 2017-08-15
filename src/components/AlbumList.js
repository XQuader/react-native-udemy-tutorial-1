import axios from 'axios';
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        const { viewStyle } = styles;

        return (
            <View style={viewStyle}>
                {this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)}
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        alignItems: 'center'
    }
};

export default AlbumList;
