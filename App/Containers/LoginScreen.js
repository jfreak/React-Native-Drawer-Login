import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
      <Text>I am Login Screen</Text>

      <Text
        style={styles.linky}
        onPress={() => this.props.navigation.navigate('signupScreen')} >
        Go to Signup
      </Text>

      <Text
        style={styles.linky}
        onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
        Go to Forgot Password
      </Text>

      <Text
        style={styles.linky}
        onPress={() => this.props.navigation.navigate('drawerStack')} >
        Pretend we logged in
      </Text>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
