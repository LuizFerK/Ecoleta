import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Points" component={Points} />
      <App.Screen name="Detail" component={Detail} />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
