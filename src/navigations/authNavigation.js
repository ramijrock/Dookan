import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./tabNavigators";
import { ProductDetails, Address, ChangePassword} from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown: false}}>
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    )
}

export default AuthNavigation;