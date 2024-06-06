import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Arrow, Button, TextInput} from '../../components';
import { COLORS, width } from "../../utils/globalColors";
import { useNavigation } from "@react-navigation/native";


const data = [
    {
        id:0,
        name: '@paytm'
    },
    {
        id:1,
        name: '@upi'
    },
    {
        id:2,
        name: '@ybl'
    },
    {
        id:3,
        name: '@ibl'
    },
    {
        id:4,
        name: '@axl'
    },
    {
        id:5,
        name: '@okhdfcbank'
    }
]

const PaymentDetails = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Arrow title={'Payment methods'} name={'chevron-back'} onPress={() => navigation.goBack()} />
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.headingSEction}>
                    <Text style={styles.heading}>Pay by entering UPI ID</Text>
                    <Text style={styles.knowMore}>Know More</Text>
                </View>
                <View style={styles.upiSection}>
                    <TextInput placeholder={"Enter VPA ID"} placeholderTextColor={COLORS.tab} />
                    <Text style={styles.verifyText}>Verify VPA</Text>
                </View>
                <View style={styles.suggestion}>
                    {
                        data.map((item) => {
                            return (
                                <View style={styles.suggestBox}>
                                    <Button btnName={item.name} height={30} backgroundColor={'transparent'} borderColor={COLORS.primary} borderWidth={1} borderRadius={8} color={COLORS.textColor} />
                                </View>
                            )
                        })
                    } 
                </View>
                <View style={styles.lineSection}>
                    <View style={styles.line} />
                    <Text style={styles.option}>OR</Text>
                    <View style={styles.line} />
                </View>

                <View style={{paddingBottom:10}}>
                    <TextInput placeholder={'Enter Mobile No / UPI No'} placeholderTextColor={COLORS.black} />
                    <Text style={styles.verifyText}>Verify UPI Number</Text>
                </View>
            </ScrollView>
            <View style={{padding:9}}>
                    <Button btnName={`Pay ${'₹5'}`} height={50} borderRadius={10} color={COLORS.black} fontSize={18} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    headerSection: {
        backgroundColor: COLORS.lightwhite,
        paddingBottom: 10,
        padding: 16,
    },
    body:{
        padding:9, 
        // backgroundColor:'red',
        flex:1,
    },
    headingSEction:{
        marginTop:15
    },
    heading:{
        fontSize:18,
        fontWeight:'bold',
        lineHeight:19,
        letterSpacing:0.5,
        color:COLORS.textColor
    },
    knowMore:{
        fontSize:16,
        fontWeight:'500',
        lineHeight:24,
        color:COLORS.textColor
    },
    upiSection:{
        // backgroundColor:'red',
        marginVertical:20,
    },
    verifyText:{
        marginTop:5,
        fontSize:15,
        lineHeight:20,
        color:COLORS.black,
        paddingHorizontal:5
    },
    suggestion:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'red'
    },
    suggestBox:{
        width:width*0.3,
        marginVertical:10
    },
    lineSection:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginVertical:20,
    },
    line:{
        width:width*0.42,
        height:1,
        backgroundColor:COLORS.primary
    },
    option:{
        marginHorizontal:10,
        fontSize:18,
        fontWeight:'bold',
        lineHeight:20,
        color:COLORS.textColor
    }
})

export default PaymentDetails;