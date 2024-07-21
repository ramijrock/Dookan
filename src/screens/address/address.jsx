import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Arrow } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../utils/globalColors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Address = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Arrow title={'Add Address'} name={'chevron-back'} onPress={() => navigation.goBack()} />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.addBtnWrapper}>
                <View style={styles.addBtn}>
                    <MaterialCommunityIcons name="plus" size={24} color={COLORS.textColor} />
                    <Text style={styles.addText}>Add Address</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.addressSection}>
                <Text style={styles.addressCount}>3 saved addresses</Text>
            </View>
            <View style={styles.listSection}>
                <FlatList
                    data={[1, 2]}
                    renderItem={() => {
                        return (
                            <View style={styles.addressContainer}>
                                <TouchableOpacity style={{ position:'absolute', right: 0, top: 4}}>
                                    <MaterialCommunityIcons name="dots-vertical" size={24} color={COLORS.black} />
                                </TouchableOpacity>
                                <View style={{flexDirection:'row', alignItems:'center', marginTop: 8}}>
                                    <Text style={styles.customerName}>Ramij Dafadar</Text>
                                    <Text style={{backgroundColor: COLORS.white, paddingHorizontal:6, paddingVertical:2, borderRadius:6, marginHorizontal: 8, color: COLORS.tab}}>Home</Text>
                                </View>
                                <Text style={styles.customerAddress}>
                                    N00029, Mira Dafadar Para, Near Paradise Club, Nadia District, West Bengal - 741156
                                </Text>
                                <Text style={styles.customerMobile}>7699259492</Text>
                            </View>
                        )
                    }}
                />
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
    addBtnWrapper:{
        backgroundColor: COLORS.lightGrey, 
        padding: 16, 
        alignItems:'center'
    },
    addBtn:{
        flexDirection:'row',
        alignItems: "center",
        marginLeft: 4
    },
    addText:{
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textColor,
        marginLeft: 4
    },
    addressSection:{
        paddingHorizontal:16,
        paddingTop: 16,
        paddingBottom:16
    },
    addressCount: {
        fontSize: 16,
        color: COLORS.textColor
    },
    listSection: {
        paddingHorizontal: 16
    },
    addressContainer:{
        backgroundColor:COLORS.lightGrey,
        marginVertical:4,
        padding:4,
        borderRadius: 4
    },
    customerName:{
        fontSize:18,
        fontWeight:'bold',
        color: COLORS.textColor
    },
    customerAddress: {
        marginTop: 8,
        fontSize: 16,
        color: COLORS.textColor
    },
    customerMobile:{
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8
    }
})

export default Address;