// Components/Test.js
import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import HelloWorld from './HelloWorld';
class Test extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.subview_container}>
            <HelloWorld />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
    // backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
    // Equivalent
    ...Platform.select({
        ios: {
            backgroundColor: 'red',
        },
        android: {
            backgroundColor: 'blue',
        }
    }),
    height: 50,
    width: 50, 
  }
})

export default Test