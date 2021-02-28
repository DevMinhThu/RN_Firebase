import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import {firebaseApp} from './FirebaseConfig';

export default function Register(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'Alert Title',
          'Register successfully ' + email,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ],
          {cancelable: false},
        );
        setEmail('');
        setPassword('');
      })
      .catch(function (error) {
        Alert.alert(
          'Alert Title',
          'Register fail!',
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
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>REGISTER</Text>
      <TextInput
        style={styles.styleTextInput}
        placeholder="Email..."
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        style={styles.styleTextInput}
        placeholder="Password..."
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <View style={styles.containerButton}>
        <Button style={styles.buttonLogin} title="AGREE" onPress={register} />
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
