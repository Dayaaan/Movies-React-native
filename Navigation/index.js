import { createStackNavigator, createAppContainer } from 'react-navigation';
import Search from '../Containers/Search';
import FilmDetail from '../Containers/FilmDetail';

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
      screen: FilmDetail,
  }
})

export default createAppContainer(SearchStackNavigator)