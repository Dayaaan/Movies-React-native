const API_TOKEN = '38f9deda8f330ebc862ab9424807c24a';


export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page;
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
};

export const getImageFromApi = name => 'https://image.tmdb.org/t/p/w300' + name;