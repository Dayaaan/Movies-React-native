import React from 'react'
import { Animated } from 'react-native'

class EnLargeShrink extends React.Component {

    state = {
      viewSize: new Animated.Value(this.getSize())
    }

    getSize() {
        if (this.props.shouldEnlarge) {
            return 90
        }
        return 40
    }
  // La méthode componentDidUpdate est exécuté chaque fois que le component est mise à jour, c'est l'endroit parfait pour lancer / relancer notre animation.
  componentDidUpdate() {
    Animated.spring(
      this.state.viewSize,
      {
        toValue: this.getSize()
      }
    ).start()
  }

  render() {
    return (
        <Animated.View
          style={{ width: this.state.viewSize, height: this.state.viewSize }}>
          {this.props.children}
        </Animated.View>
    )
  }
}

export default EnLargeShrink