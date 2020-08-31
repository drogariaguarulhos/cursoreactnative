import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import Product from './pages/Product';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="JsHunt"
        component={Main}
        options={{
          headerStyle: {
            backgroundColor: '#3a5798',
          },
          headerTintColor: 'snow',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({route}) => ({
          title: route.params.product.title,
          headerStyle: {
            backgroundColor: '#3a5798',
          },
          headerTintColor: 'snow',
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
