import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import {firebaseApp} from './FirebaseConfig';

export default function Login(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('testfull@gmail.com');
  const [password, setPassword] = useState('123456');
  
  const HandleLogin = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'Alert',
          'Login successfully ' + email,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => navigation.navigate('Welcome')},
          ],
          {cancelable: false},
        );
        setEmail(''); // Update lại Email thành null sau khi Login
        setPassword(''); // Update lại Password thành null sau khi Login
      })
      .catch(function (error) {
        Alert.alert(
          'Alert',
          'Wrong password!!!',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>LOGIN</Text>
      <TextInput
        style={styles.styleTextInput}
        placeholder="Email..."
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        style={styles.styleTextInput}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <View style={styles.containerButton}>
        <Button style={styles.buttonLogin} title="Login" onPress={HandleLogin} />
        <Button
          style={styles.buttonRegister}
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  styleTextInput: {
    borderColor: 'gray',
    height: 40,
    width: 250,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },

  buttonLogin: {},

  buttonRegister: {},

  containerButton: {
    flexDirection: 'row',
  },
});
