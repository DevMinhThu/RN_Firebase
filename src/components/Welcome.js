import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {firebaseApp} from './FirebaseConfig';

const Welcome = ({navigation}) => {
  const [info, setInfo] = useState('');

  //Connect with DB
  var database = firebaseApp.database();

  //Function Add Info
  function addInfo() {
    database.ref('Lecture-USA').child('Lecture1').set({
      SS051: info, // đẩy state info khi người dùng nhập vào textInput lên DB
    });
    setInfo('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME LOGIN SUCCESSFULLY!</Text>
      <Button
        color="black"
        title="Back to Home"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Next to RealtimeDB"
        color="green"
        onPress={() => navigation.navigate('RealtimeDB')}
      />
      <TextInput
        style={styles.styleTextInput}
        placeholder="Add info..."
        onChangeText={(info) => setInfo(info)}
        value={info}
      />
      <Button title="Add info" color="coral" onPress={addInfo} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    fontSize: 25,
    color: 'red',
  },

  styleTextInput: {
    borderColor: 'gray',
    height: 40,
    width: 250,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});
