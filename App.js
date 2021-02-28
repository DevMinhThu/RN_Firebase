import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Welcome from './src/components/Welcome';
import RealtimeDB from './src/components/RealtimeDB';

//Custom hidden header of Stack
const navOptionHandler = () => ({
  headerShown: false,
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="RealtimeDB"
          component={RealtimeDB}
          options={navOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
