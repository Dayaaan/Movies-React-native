import { connect } from 'react-redux';
import Search from '../Components/Search';
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

const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(Search);

export default SearchContainer;