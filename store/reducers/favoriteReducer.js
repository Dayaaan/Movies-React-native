const initialState = {
    favoritesFilm: [],
}

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const toggleFavoriteReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id);
            if (favoriteFilmIndex != -1) {
                //Supression
                return {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter( (item,index) => index !== favoriteFilmIndex ),
                }
            } else {
                // Ajouter
                return {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }
        default:
            return state;
            
    }
}

export const toggleFavorite = value => ({
    type: TOGGLE_FAVORITE,
    value,
})

export default toggleFavoriteReducer;