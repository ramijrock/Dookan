import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { COLORS } from "../../utils/globalColors";
import {LoginFeatures} from '../../features';
import { useNavigation } from "@react-navigation/native";


const SignIn = () => {
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.pageTitle}>
                <Text style={styles.title}>Sign In</Text>
                <Text style={styles.subTitle}>Please login to your account.</Text>
            </View>
            <LoginFeatures />
            <View style={styles.account}>
                <Text style={styles.subTitle}>Don't have an account?</Text>
                <Text onPress={()=>navigation.navigate('Register')} style={[styles.subTitle, {color:COLORS.primary, marginHorizontal:5, fontWeight:'bold'}]}>Register</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:16,
        flex:1,
        // backgroundColor:COLORS.white
    },
    pageTitle:{
        marginTop:30,
        marginVertical:10,
        // backgroundColor:'red'
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
    account: {
        flexDirection:'row',
        alignSelf:'center',
        marginVertical:20,
        paddingVertical:10,
        alignItems:'center'
    }
})

export default SignIn;