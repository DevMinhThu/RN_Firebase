import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {firebaseApp} from './FirebaseConfig';

const RealtimeDB = ({navigation}) => {
  var database = firebaseApp.database();

  const setDB = () => {
    database.ref('KH-HaNoi').set({
      MonHoc: 'ReactNative',
      Lop: 'K63',
    });
  };

  const pushDB = () => {
    // Cách gọi khác của "database.ref()""
    firebaseApp.database().ref('KH-HaNoi').child('KH-HCM').push({
      MonHoc: 'Angular',
      Lop: 'K39',
    });
  };

  const pickDB = () => {
    // on() và once() cách gọi sử dụng như nhau
    database.ref('KH-HaNoi').child('MonHoc').once('value', function(snapshot){
      alert(snapshot.val());
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>DataBase</Text>
      <Button color="black" title="Back" onPress={() => navigation.goBack()} />
      <Button color="green" title="Set DB" onPress={setDB} />
      <Button color="red" title="Push DB" onPress={pushDB} />
      <Button color="purple" title="Pick DB" onPress={pickDB} />
    </View>
  );
};

export default RealtimeDB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },

  welcome: {
    fontSize: 25,
    color: 'green',
  },
});
