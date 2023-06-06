import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Agent from './src/Screens/Agent';
import Booth from './src/Screens/Booth';
import Aicon from 'react-native-vector-icons/AntDesign';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Agent"
          component={Agent}
          options={{
            title: 'Emergency Drop-Off',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FA8832',
              marginTop: 15,
              elevation: 0,
            },
            headerTitleStyle: {
              color: '#FFF',
            },
            headerLeft: () => (
              <Aicon
                name="left"
                size={22}
                color="#fff"
                style={{paddingLeft: 31}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Booth"
          component={Booth}
          options={{
            title: 'Emergency Drop-Off',
            headerTitleAlign: 'center',

            headerTitleStyle: {
              color: '#FFF',
            },
            headerStyle: {
              backgroundColor: '#FA8832',
              marginTop: 15,
              elevation: 0,
            },
            headerLeft: () => (
              <Aicon
                name="left"
                size={22}
                color="#fff"
                style={{paddingLeft: 31}}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
