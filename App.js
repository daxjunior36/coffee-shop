import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/home/Home';
import Initial from './src/views/initial/Initial';
import Detail from './src/views/Detail/Detail';
import Order from './src/views/Order/Order';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          options={{headerShown: false}}
        >
          {() =>    <Tab.Navigator screenOptions={{
        tabBarStyle: {height: 99, borderTopLeftRadius: 24, borderTopRightRadius:24},
      }}>
      <Tab.Screen options={{tabBarStyle:{display:'none'}, headerShown:false, tabBarIcon: ({focused, size, color})=>{
        let icon = focused
        ? require('./src/assets/icons/Iconly-Bulk-BagColor.png')
        : require('./src/assets/icons/Iconly-Bulk-Bag.png')
        return <Image source={icon} style={{ width: size, height: size,  }} />
      } }} name='InitialTab'>
        {() => (
        <Stack.Navigator>
          <Stack.Screen
          name="Initial"
          component={Initial}
          options={{headerShown: false}} 

        />
        </Stack.Navigator>

      )}
      </Tab.Screen>
    

<Tab.Screen options={{ headerShown:false, tabBarIcon: ({focused, size, color})=>{
        let icon = focused
        ? require('./src/assets/icons/Iconly-Bulk-HomeSelect.png')
        : require('./src/assets/icons/Iconly-Bulk-Home.png')
        return <Image source={icon} style={{ width: size, height: size,  }} />
      }}}name='HomeTab'>    
      {() => (
  <Stack.Navigator> 
    <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}} 
      />
    </Stack.Navigator>
)}
      </Tab.Screen>
          
    </Tab.Navigator>}
          </Stack.Screen>
      <Stack.Screen
      name='Detail'
      component={Detail}
      />

<Stack.Screen
      name='Order'
      component={Order}
      />
      </Stack.Navigator>
  

  </NavigationContainer>
  );
}

