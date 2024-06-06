import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {readData} from '../utils/Utils';
import appContext from "../context/appContext";
import AppNavigation from "./appnavigation";
import AuthNavigation from "./authNavigation";


const Navigation = () => {
    const context = useContext(appContext)

    useEffect(() => {
            CheckUserData();
    }, [])

    const CheckUserData = async () => {
        let userData = await readData('user_details');
        context.setUserData(userData);
    }


    return (
        <NavigationContainer>
            {
                context.userData?.token == null ? (
                    <AppNavigation />
                ) : (
                    <AuthNavigation />
                )
            }
        </NavigationContainer>
    )
}

export default Navigation;