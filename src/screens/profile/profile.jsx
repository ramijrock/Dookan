import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Arrow, Card } from "../../components";
import { COLORS } from "../../utils/globalColors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import appContext from '../../context/appContext';

const MyProfile = () => {
    const navigation = useNavigation();
    const context = useContext(appContext);
    const logout = () => navigation.navigate('Logout');

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Arrow title={'Profile'} notification={'notifications'} onPressOthers={() => navigation.navigate('Notification')} />
            </View>
            <View style={styles.imageSection}>
                <View style={styles.imageBG}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.image} />
                    <View style={styles.imageIcon}>
                        <Ionicons name="camera-outline" size={24} color={COLORS.white} />
                    </View>
                </View>
                <View style={styles.nameSection}>
                    <Text style={styles.name}>{context.userData?.user?.name}</Text>
                    <Text style={styles.subName}>{context.userData?.user?.email}</Text>
                </View>
                <View style={styles.rightIcon}>
                    <MaterialCommunityIcons name="square-edit-outline" size={24} color={COLORS.iconColor} />
                </View>
            </View>
            <View style={styles.body}>
                <Card leftIcon={"cart-outline"} icon={"chevron-right"} title={'My order'} />
                <Card leftIcon={"map-marker-account-outline"} icon={"chevron-right"} title={'Address'} onPress={() => navigation.navigate('Address')} />
                <Card leftIcon={"wallet-outline"} icon={"chevron-right"} title={'Payment methods'} />
                <Card leftIcon={"lock-reset"} icon={"chevron-right"} title={'Change password'} onPress={() => navigation.navigate('ChangePassword')} />
                <Card leftIcon={"account-settings-outline"} icon={"chevron-right"} title={'Setting'} />
                <Card leftIcon={"exclamation"} icon={"chevron-right"} title={'About us'} />
                <Card leftIcon={"help-circle-outline"} icon={"chevron-right"} title={'Privacy policy'} />
                <Card leftIcon={"location-exit"} icon={"chevron-right"} title={'Log out'} onPress={logout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    headerSection: {
        backgroundColor:COLORS.lightwhite, 
        paddingBottom:10, 
        padding:16
    },
    imageSection:{
        backgroundColor:COLORS.lightwhite,
        paddingVertical:9,
        paddingHorizontal:14,
        flexDirection:'row',
        alignItems:'center'
    },
    imageBG:{
        height:80,
        width:80,
        backgroundColor:COLORS.lightGrey,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        height:80,
        width:80,
        borderRadius:50,
        borderWidth:1,
        borderColor:COLORS.primary,
    },
    imageIcon:{
        position:'absolute',
        right:-12,
        bottom:8,
        backgroundColor:COLORS.primary,
        padding:5,
        borderRadius:50
    },
    nameSection:{
        marginHorizontal:20,
        // backgroundColor:COLORS.lightGrey,
        padding:5,
    },
    name:{
        fontSize:16,
        fontWeight:'600',
        color:COLORS.textColor
    },
    subName:{
        fontSize:14,
        color:COLORS.textColor,
        fontWeight:'400'
    },
    rightIcon:{
        position:'absolute',
        right:20
    },
    body:{
        padding:9,
        flex:1
    },
})

export default MyProfile;