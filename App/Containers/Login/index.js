import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements'

class Login extends React.Component {

  onChangeText = (e) => {
    console.log("Received:", e)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DevScouts Login</Text>
        <View style={styles.form}>
          <FormLabel>Email</FormLabel>
          <FormInput onChangeText={this.onChangeText} ref='email'/>
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={this.onChangeText} ref='password' secureTextEntry={true}/>
          <Button title='SIGNIN' style={{marginTop: 25}} color={Colors.panther} backgroundColor={Colors.snow}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.eggplant,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.snow,
    ...Fonts.style.h2
  },
  form: {
    marginTop: 20,
    width: '90%'
  }
})

export default Login;
