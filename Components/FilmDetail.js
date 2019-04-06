import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi';
import favoriteBorder from '../images/favorite_border.png';
import favorite from '../images/favorite.png';

import numeral from 'numeral';

class FilmDetail extends React.Component {

    state = {
        film: undefined,
        isLoading: true,
    }
    componentDidMount() {
        getFilmDetailFromApi(this.props.navigation.state.params.id).then(data => {
          this.setState({
            film: data,
            isLoading: false
          })
        })
    }
    componentDidUpdate() {
        console.log(this.props.favoritesFilm);
    }

    displayFavoriteImage = () => {
        let sourceImage = favoriteBorder;
        const { film } = this.state;
        const { favoritesFilm } =  this.props;
        if (favoritesFilm.findIndex( item => item.id === film.id ) !== -1 ) {
          sourceImage = favorite;
        }
        return (
            <Image 
                source={sourceImage}
                style={styles.favorite_image}
            />
        )
    }
    render() {
        const { isLoading, film } = this.state;
        const { toggleFavorite } = this.props;
        console.log(film);
        console.log(this.props);
        if (film != undefined) {
            return (
                <ScrollView style={styles.main_container}>
                    {console.log(film.backdrop_path)}
                    <Image
                        style={styles.image}
                        source={{ uri: getImageFromApi(film.backdrop_path) }}
                    />
                    <Text style={styles.title_text}>{film.title}</Text>
                    <TouchableOpacity
                        style={styles.favorite_container} 
                        onPress={() => toggleFavorite(film)}
                    >
                        {this.displayFavoriteImage()}
                    </TouchableOpacity>
                    <Text style={styles.description_text}>{film.overview}</Text>
                    <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
                    <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
                    <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
                    <Text style={styles.default_text}>Genre(s) : 
                        {film.genres.map(genre => (genre.name)).join(" / ")}
                    </Text>
                    <Text style={styles.default_text}>Genre(s) : 
                        {film.production_companies.map(company => (company.name)).join(" / ")}
                    </Text>
                    {isLoading && (
                        <View style={styles.loading_container}>
                           <ActivityIndicator size='large' />
                        </View>
                    )}
                </ScrollView>
            )
        }
        return null;
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    image: {
        height: 169,
        margin: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
    favorite_container: {
        alignItems: 'center',
    },
    favorite_image: {
        width: 40,
        height: 40,
    },
});

export default FilmDetail;