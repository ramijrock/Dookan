import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Arrow, Button} from '../../components';
import {Segment} from '../../layouts';
import { COLORS, height } from "../../utils/globalColors";
import { useNavigation } from "@react-navigation/native";



const Cart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Arrow title={'My Cart'} />
            </View>
            <ScrollView style={styles.body}>
                <View style={{marginBottom:10}}>
                    <Segment />
                    <Segment />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.row}>
                    <Text style={styles.label}>Product Price:</Text>
                    <Text style={styles.rate}>₹50.00</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Vat 5%:</Text>
                    <Text style={styles.rate}>₹5.00</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Delivery charge:</Text>
                    <Text style={styles.rate}>₹15.00</Text>
                </View>
                <View style={styles.hrLine} />
                <View style={styles.row}>
                    <Text style={styles.label}>Total Amount:</Text>
                    <Text style={styles.rate}>₹70.00</Text>
                </View>
                <View style={styles.btnWrapper}>
                    <Button btnName={'Check out'} height={50} borderRadius={10} fontSize={16} color={COLORS.tab} onPress={() => navigation.navigate('PaymentMethod')} />
                </View>
            </View>
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
    body: {
        flex:1,
        padding:9,
        // backgroundColor:'red',
    },
    footer:{
        backgroundColor:COLORS.lightGrey,
        padding:9
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    label:{
        marginLeft:10,
        fontSize:15,
        color:COLORS.black
    },
    rate: {
        marginRight:20,
        fontWeight:'600',
        color:COLORS.black,
        fontSize:16
    },
    hrLine:{
        height:2,
        backgroundColor:COLORS.primary
    }, 
    btnWrapper:{
        marginTop:10
    }
})

export default Cart;