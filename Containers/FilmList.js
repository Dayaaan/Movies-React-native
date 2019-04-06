import { connect } from 'react-redux';
import FilmList from '../Components/FilmList';

const mapStateToProps = state => ({
    favoritesFilm: state.favoritesFilm,
})

const mapDispatchToProps = {};

const FilmListContainer = connect(mapStateToProps,mapDispatchToProps)(FilmList);

export default FilmListContainer;