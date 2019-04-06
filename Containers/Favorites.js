import { connect } from 'react-redux';
import Favorites from '../Components/Favorites';

const mapStateToProps = state => ({
    favoritesFilm: state.favoritesFilm,
})

const mapDispatchToProps = {};

const FavoritesContainer = connect(mapStateToProps,mapDispatchToProps)(Favorites);

export default FavoritesContainer;