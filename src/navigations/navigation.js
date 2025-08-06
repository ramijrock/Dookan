import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {readData} from '../utils/Utils';
import AppNavigation from "./appnavigation";
import AuthNavigation from "./authNavigation";
import { useSelector } from "react-redux";


const Navigation = () => {
    const {userToken} = useSelector((state) => state.authReducer);


    return (
        <NavigationContainer>
            {
                userToken == null ? (
                    <AppNavigation />
                ) : (
                    <AuthNavigation />
                )
            }
        </NavigationContainer>
    )
}

export default Navigation;