import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';
import Search from '../Containers/Search';
import FilmDetail from '../Containers/FilmDetail';
import Favorites from '../Containers/Favorites';
import Test from '../Components/Test'
import search from '../images/search.png';
import favorite from '../images/favorite.png';

// createStackNavigator Navigation entre vue
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
      screen: FilmDetail,
  },
})
const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

// createBottomTabNavigator , Navigation en bas de l'application
const MoviesTabNavigator = createBottomTabNavigator({
  Test: {
    screen: Test,
  },
  Search: {
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image 
          source={search}
          style={styles.icon}
        />
      }
    }
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image 
          source={favorite}
          style={styles.icon}
        />
      }
    }
  }
}, {
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF'
  }
})

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
})

export default createAppContainer(MoviesTabNavigator)