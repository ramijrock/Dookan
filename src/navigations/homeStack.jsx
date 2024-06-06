import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
    ListWiseProduct, 
    HomeScreen, 
    CategoryProduct, 
    PaymentMethod,
    PaymentDetails,
    Logout,
    Notification,
    Address,
    ChangePassword
} from "../screens";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LWProduct" component={ListWiseProduct} />
            <Stack.Screen name="CategoryProduct" component={CategoryProduct} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="PaymentDetail" component={PaymentDetails} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
    )
}

export default HomeStack;