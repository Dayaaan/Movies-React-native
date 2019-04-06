import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import FilmList from '../Containers/FilmList';

class Favorites extends React.Component {
    render() {
        const { favoritesFilm , navigation } = this.props;
        if (favoritesFilm.length === 0) {
            return (
                <View style={styles.content}>
                    <Text style={styles.text}>Aucun film en favoris</Text>
                </View> 
            )
           
        } else {
            return (
                <FilmList 
                    films={favoritesFilm}
                    navigation={navigation}
                    favoriteList={true}
                />
            )
        }
        
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Favorites