import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        return (
            <ScrollView>
                {this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)}
            </ScrollView>
        );
    }
}

export default AlbumList;
