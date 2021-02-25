
import * as React from 'react';
import {} from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

////////////////////////////////redux
import {store} from './store'
import {Provider} from 'react-redux'
/////////////////////////////////pagine

import Login from './src/Login';
import Home from './src/Home';
import FirstPage from './src/FirstPage';

//////////////////////////////

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown: true}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: true}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;