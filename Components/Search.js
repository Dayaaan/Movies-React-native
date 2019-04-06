/**
 * NPM IMPORT
 */
import React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native';

/**
 * Local Import
 */
// import films from '../Helpers/filmData';
import FilmList from '../Containers/FilmList';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

class Search extends React.Component {

    state = {
        searchedText: '',
        films: [],
        isLoading: false,
        page: 0,
        totalPages: 0,

    }
  
    loadFilms = () => {
        this.setState({ isLoading: true })
        if (this.state.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.state.searchedText, this.state.page+1).then(data => 
                this.setState({ 
                    page: data.page,
                    totalPages: data.total_pages,
                    films: [...this.state.films, ...data.results],
                    isLoading: false,
                }));
        }
    }

    searchTextInputChanged = (text) => {
        this.setState({ searchedText: text })
    }

    searchFilms = () => {
        this.setState({
            page: 0,
            totalPages: 0,
            films: [],
        });
        console.log("page:" + this.state.page + "total page: " + this.state.totalPages + "nombre de film: " +  this.state.films.length)
        this.loadFilms();
    }

    displayDetailForFilm = (id) => {
        this.props.navigation.navigate("FilmDetail", { id });
    }

    render() {
        console.log(this.state.isLoading);
        const { films, isLoading, page, totalPages } = this.state;
        const { navigation } = this.props;
        console.log(navigation);
        return (
            <View style={styles.main_container}>
                <TextInput style={ styles.textInput } placeholder="Titre de film" onChangeText={this.searchTextInputChanged} onSubmitEditing={this.searchFilms} />
                <Button style={{ height: 50 }} title="Rechercher" onPress={this.searchFilms} />
                <FilmList 
                    films={films}
                    navigation={navigation}
                    loadFilms={this.loadFilms}
                    page={page}
                    totalPages={totalPages}
                    favoriteList={false} // Ici j'ai simplement ajouté un booléen à false pour indiquer qu'on n'est pas dans le cas de l'affichage de la liste des films favoris. Et ainsi pouvoir déclencher le chargement de plus de films lorsque l'utilisateur scrolle
                />
                {isLoading && (
                    <View style={styles.loading_container}>
                       <ActivityIndicator size='large' />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    textInput: { 
        marginLeft: 5, 
        marginRight: 5, 
        height: 50,
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5 
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
})
export default Search;