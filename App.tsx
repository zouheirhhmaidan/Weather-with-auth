import * as React from 'react';
import 'localstorage-polyfill';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/navigation/Tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImageFilter from './components/ImageFilter';
import SearchWeather from './components/SearchWeather';
import { TouchableOpacity } from 'react-native';
import AuthScreen from './components/AuthScreen';
import LoginScreen from './components/auth/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import RegisterScreen from './components/auth/RegisterScreen';








const CustomTabBarButton = ({children , onPress}:any) => {
  return (
  <TouchableOpacity
    style={{top: -30, justifyContent: 'center', alignItems: 'center'}}
    onPress={onPress}
  >
    <View style={{
      width: 60,
      height: 60,
      borderRadius:35,
      backgroundColor: 'white'
    }}>
        {children}
    </View>
  </TouchableOpacity>
  )
}

const App = () => {


  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <>
    
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel: false,
        tabBarStyle:{position: 'absolute', bottom: 25, left: 20, right: 20, elevation: 0, backgroundColor: '#ffffff', borderRadius: 15,
      height: 70,}
      }}>
      <Tab.Screen name='Weather' component={SearchWeather} options={{ headerShown:false,headerStyle: {backgroundColor: 'rgba(0,0,0,0.4)',}, tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
          <Image source={require('./assets/cloud1.png')} resizeMode='contain' style={{width: 55, height: 55, tintColor: focused ? 'red' : 'blue'}}/>
        </View>
      )}}/>
      <Tab.Screen name='Auth' component={LoginScreen} options={{headerShown: false,tabBarIcon: ({focused}) => (
        <View>
          <Image source={require('./assets/plus.png')} resizeMode='contain' style={{width: 50, height: 50, tintColor: focused ? 'red' : 'blue'}}/>
          </View>
      ),
        tabBarButton: (props:any) => (
          <CustomTabBarButton {...props} />
        )
      }}/>
      <Tab.Screen name='Image' component={ImageFilter} options={{headerShown:false,tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
          <Image source={require('./assets/camera.png')} resizeMode='contain' style={{width: 55, height: 55, tintColor: focused ? 'red' : 'blue'}}/>
        </View>
      )}} />

      
      </Tab.Navigator>
    </NavigationContainer>
    
    
        
      
</>
  );
};


export default App;





