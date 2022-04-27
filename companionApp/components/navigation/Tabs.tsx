import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchWeather from "../SearchWeather";
import ImageFilter from "../ImageFilter";
const Tab = createBottomTabNavigator();

    const Tabs = () => {
        return (
    
            <Tab.Navigator>
                <Tab.Screen name='Weather' component={SearchWeather}/>
                <Tab.Screen name='Image' component={ImageFilter}/>
            </Tab.Navigator>
        )
    }

export default Tabs