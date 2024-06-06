import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Arrow } from "../../components";
import { COLORS } from "../../utils/globalColors";
import {ForgetPasswordFeatures} from '../../features';



const ForgetPassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{marginBottom:15}}>
                <Arrow onPress={()=>navigation.goBack()} name={'chevron-back'} />
            </View>
            <View style={styles.pageTitle}>
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.subTitle}>Check Email: <Text style={styles.email}>ramij****@gmail.com</Text></Text>
            </View>
            <View style={styles.iconSection}>
                <Image style={styles.mailIcon} source={require('../../assets/images/open-mail.png')} />
            </View>
            <View>
                <Text style={styles.verifyText}>Enter verify code</Text>
            </View>
            <ForgetPasswordFeatures />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:16
    },
    pageTitle:{
        marginVertical:16
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        color:COLORS.textColor
    },
    subTitle: {
        fontSize:16,
        fontWeight:'600',
        marginBottom:10,
        color:COLORS.textColor
    },
    email:{
        fontSize:17,
        fontWeight:'bold'
    },
    iconSection:{
        backgroundColor:COLORS.white,
        alignSelf:'center',
        padding:10,
        borderRadius:10,
        marginVertical:10
    },
    mailIcon:{
        height:50,
        width:50,
        resizeMode:'contain'
    },
    verifyText:{
        alignSelf:'center',
        marginVertical:10,
        fontSize:18,
        fontWeight:'500',
        color:COLORS.textColor
    },
    
})

export default ForgetPassword;