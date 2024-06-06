import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS } from "../../utils/globalColors";
import { HDSearchFeatures } from "../../features";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Header = () => {
    return (
        <>
            <View style={styles.headerSection}>
                <View style={styles.imgContainer}>
                    <Image style={styles.profile} source={require('../../assets/images/profile.jpg')} />
                </View>
                <View style={styles.searchSection}>
                    <HDSearchFeatures />
                </View>
                <View style={styles.cart}>
                    <Ionicons name="cart-outline" color={COLORS.primary} size={50} />
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    headerSection:{
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    imgContainer:{
        height:60,
        width:60,
        backgroundColor:COLORS.white,
        borderRadius:12,
        alignItems:'center',
    },
    profile:{
        height:60,
        width:60,
        resizeMode:'cover',
        borderRadius:12
    },
    searchSection:{
        // width:200
        flex:1,
        paddingHorizontal:10
    },
    cart:{
        height:60,
        width:60,
        backgroundColor:COLORS.white,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default Header;