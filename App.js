import React from 'react'
import { StyleSheet,StatusBar, Text, View } from 'react-native'
import Location from './src/Location'
import Profile from './src/Profile'
import Time from './src/Time'
import weather from './src/weather'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './srcweather/Search';
import Home from './srcweather/Home';
import LocationMarker from './src/LocationMarker'
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {

  const located =()=>{
    return(
      <Stack.Navigator initialRouteName={Location}
        headerMode="none">
        <Stack.Screen
          name="Location"
          component={Location}
           
        />
        <Stack.Screen
          name="LocationMarker"
            component={LocationMarker}
    
        />
        
        </Stack.Navigator>
      )
  }
  return (
<NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
      tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#00aaff',
            inactiveBackgroundColor: '#00aaff',
          }}
    >
      <Tab.Screen
        name="located"
        component={located}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Time"
        component={Time}
        options={{
          tabBarLabel: 'Time',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timer-outline" color={color} size={size} />
          ),
         // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="weather"
        component={AppMain}
        options={{
          tabBarLabel: 'weather',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="weather-cloudy" color={color} size={size} />
          ),
        }}
      />

        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


const AppMain = () => {
  return (
    <>
      <StatusBar barStyle = "dark-content" hidden = {false}
              backgroundColor = "#00aaff" />
    
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'home') {
                iconName = 'home-city-outline';
              } else if (route.name === 'search') {
                iconName = 'city';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#00aaff',
            inactiveBackgroundColor: '#00aaff',
          }}>
          <Tab.Screen
            name="home"
            component={Home}
            initialParams={{city: 'hyderabad'}}
          />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
     
    </>
  );
};


