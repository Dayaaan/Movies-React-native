import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import FilmItem from './FilmItem';

class FilmList extends React.Component {

    state = {
        films: [],
    }
  
    displayDetailForFilm = (id) => {
      console.log("Display film " + id)
      // On a récupéré les informations de la navigation, on peut afficher le détail du film
      this.props.navigation.navigate('FilmDetail', {id})
    }
  
    render() {
        const { films, favoritesFilm } = this.props;
        return (
          <FlatList
            style={styles.list}
            data={films}
            extraData={favoritesFilm}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <FilmItem
                film={item}
                isFilmFavorite={(favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                displayDetailForFilm={this.displayDetailForFilm}
              />
            )}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (this.props.page < this.props.totalPages) {
                // On appelle la méthode loadFilm du component Search pour charger plus de films
                this.props.loadFilms()
              }
            }}
          />
        )
    }
  }
  
  const styles = StyleSheet.create({
    list: {
      flex: 1
    }
  })
  
  export default FilmList;