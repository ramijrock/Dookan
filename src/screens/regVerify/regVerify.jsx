import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Arrow } from "../../components";
import { COLORS } from "../../utils/globalColors";
import {RegVerifyFeatures} from '../../features';
import {readData} from '../../utils/Utils'



const RegVerify = (props) => {
    const {email} = props.route.params?.userData;
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{marginBottom:15}}>
                <Arrow onPress={()=>navigation.goBack()} name={'chevron-back'} />
            </View>
            <View style={styles.pageTitle}>
                <Text style={styles.title}>Register verify code</Text>
                <Text style={styles.subTitle}>Check Email: <Text style={styles.email}>{email}</Text></Text>
            </View>
            <View style={styles.iconSection}>
                <Image style={styles.mailIcon} source={require('../../assets/images/open-mail.png')} />
            </View>
            <View>
                <Text style={styles.verifyText}>Enter verify code</Text>
            </View>
            <RegVerifyFeatures />
        </ScrollView>
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
        marginBottom:10
    },
    subTitle: {
        fontSize:16,
        fontWeight:'600',
        marginBottom:10
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
        fontWeight:'500'
    },
    
})

export default RegVerify;