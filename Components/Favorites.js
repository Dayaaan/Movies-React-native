import React from 'react';

import { StyleSheet, Text } from 'react-native';
import FilmList from '../Containers/FilmList';

class Favorites extends React.Component {
    render() {
        const { favoritesFilm , navigation } = this.props;
        return (
            <FilmList 
                films={favoritesFilm}
                navigation={navigation}
                favoriteList={true}
            />
        )
    }
}

const styles = StyleSheet.create({

});

export default Favorites