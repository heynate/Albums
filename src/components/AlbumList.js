import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = { albums: [] };

  // is executed as soon as content is about to be loaded onto screen
  componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums(){

    //wrap with curly braces because we're referencing a javascript variable
    //the key should be the ID from the DB if that is possible
    return this.state.albums.map(album =>
      <AlbumDetail key= {album.title} album = {album} />
    );
  }

  render() {

    console.log(this.state);

    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
