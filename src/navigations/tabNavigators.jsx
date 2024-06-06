import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { COLORS } from '../utils/globalColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './homeStack';
import {Cart, Favourites, MyProfile} from '../screens';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            headerShown:false,
            tabBarStyle:{
                backgroundColor:COLORS.tab,
                borderTopLeftRadius:15,
                borderTopRightRadius:15
            },
            tabBarShowLabel:false,
            
        }}>
            <Tab.Screen name='Home' component={HomeStack} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons style={focused ? styles.activeColor : null} color={focused ? COLORS.white : COLORS.white} name="home-outline" size={25} />
                ),
            }} />
            <Tab.Screen name='Favourites' component={Favourites} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons style={focused ? styles.activeColor : null} color={focused ? COLORS.white : COLORS.white} name="heart-outline" size={25} />
                ),
            }} />
            <Tab.Screen name='MyCart' component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons style={focused ? styles.activeColor : null} color={focused ? COLORS.white : COLORS.white} name="cart-outline" size={25} />
                ),
            }} />
            <Tab.Screen name='MyProfile' component={MyProfile} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons style={focused ? styles.activeColor : null} color={focused ? COLORS.white : COLORS.white} name="person-outline" size={25} />
                ),
            }} />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    activeColor:{
        backgroundColor:COLORS.primary,
        paddingHorizontal:5,
        paddingVertical:5,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    }
})


export default BottomTab;