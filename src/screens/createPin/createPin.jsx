import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Arrow} from '../../components';
import {CreatePasswordFeatures} from '../../features';


const CreatePin = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View>
                <Arrow name={'chevron-back'} onPress={()=> navigation.goBack()} />
            </View>
            <View style={styles.pageTitle}>
                <Text style={styles.title}>Create new password</Text>
                <Text style={styles.subTitle}>Input your new password here</Text>
            </View>
            <CreatePasswordFeatures />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        // backgroundColor:'red'
    },
    pageTitle:{
        marginTop:30
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
    
})

export default CreatePin;