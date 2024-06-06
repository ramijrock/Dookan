import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Arrow } from "../../components";
import { COLORS } from "../../utils/globalColors";
import { useNavigation } from "@react-navigation/native";
import {ChangePasswordFeatures} from '../../features';

const ChangePassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Arrow title={'Change Password'} name={'chevron-back'} onPress={() => navigation.goBack()} />
            </View>
            <ScrollView>
            <View style={styles.body}>
                <View style={styles.bodyPart}>
                    <ChangePasswordFeatures />
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    headerSection: {
        backgroundColor:COLORS.lightwhite, 
        paddingBottom:10, 
        padding:16
    },
    body:{
        flex:1,
        padding:9,
    },
    bodyPart:{
        marginVertical:50
    }
})

export default ChangePassword;