import { connect } from 'react-redux';
import FilmDetail from '../Components/FilmDetail';
import { toggleFavorite } from '../store/reducers/favoriteReducer';

const mapStateToProps = state => ({
    favoritesFilm: state.favoritesFilm,
})

const mapDispatchToProps = dispatch => ({
    toggleFavorite: (film) => {
        console.log(film);
        dispatch(toggleFavorite(film));
    },
});

const FilmDetailContainer = connect(mapStateToProps,mapDispatchToProps)(FilmDetail);

export default FilmDetailContainer;