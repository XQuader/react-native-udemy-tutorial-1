import axios from 'axios';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        const { textStyle, viewStyle } = styles;

        return (
            <View style={viewStyle}>
                <Text style={textStyle}>Album List1!!!</Text>
                {this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)}
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#ddd',
        alignItems: 'center'
    }
};

export default AlbumList;
