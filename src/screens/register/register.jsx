import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {COLORS} from '../../utils/globalColors';
import { RegisterFeatures } from "../../features";
import { useNavigation } from "@react-navigation/native";
import { Arrow } from "../../components";

const Register = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{marginBottom:15}}>
                <Arrow onPress={()=>navigation.goBack()} name={'chevron-back'} />
            </View>
            <View style={styles.pageTitle}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.subTitle}>Input your information here.</Text>
            </View>
            <RegisterFeatures />
            <View style={styles.account}>
                <Text style={styles.subTitle}>Already have an account?</Text>
                <Text onPress={()=>navigation.navigate('Login')} style={[styles.subTitle, {color:COLORS.primary, marginHorizontal:5, fontWeight:'bold'}]}>Sign in</Text>
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
        color:COLORS.tab
    },
    account: {
        flexDirection:'row',
        alignSelf:'center',
        // backgroundColor:'red',
        marginVertical:20,
        paddingVertical:10,
        alignItems:'center'
    }
})

export default Register;