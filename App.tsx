
import * as React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/////////////////////////////////pagine

import Login from './src/Login';
import Home from './src/Home';

//////////////////////////////

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: true}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;