import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Arrow } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../utils/globalColors";


const Address = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Arrow title={'Add Address'} name={'chevron-back'} onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerSection: {
        backgroundColor:COLORS.lightwhite, 
        paddingBottom:10, 
        padding:16
    },
})

export default Address;