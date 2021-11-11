import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import About from '../screens/About';

const Tab = createMaterialBottomTabNavigator();

const MainTab = ({ navigate }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="MainTab" component={Home} />
            <Tab.Screen name="Searh" component={Search} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    )
}

export default MainTab
