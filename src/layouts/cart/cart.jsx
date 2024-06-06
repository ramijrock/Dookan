import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {COLORS, width} from '../../utils/globalColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components';

const Cart =({routeName, item, removeFavourite}) => {
    return (
        <>
            <View style={styles.cardSection}>
                <View style={styles.imageSection}>
                    <Image style={styles.productImage} source={{uri: item?.product?.image}} />
                </View>
                <View style={{justifyContent:'space-between'}}>
                    <View>
                        <Text style={styles.name}>{ item?.product?.name.length > 20 ? item?.product?.name?.slice(0,20) +"..." : item?.product?.name }</Text>
                        {
                            routeName == "Favourites" &&
                            <Ionicons style={styles.favIcon} name={item?.isfavourite ? "heart" : "heart-outline"} size={25} color={item?.isfavourite ? COLORS.error : COLORS.primary} onPress={() => removeFavourite(item?.productid)} />
                        }
                    </View>
                    <Text style={styles.subHeading}>{item?.product?.description}</Text>
                    <View style={styles.cardFooter}>
                        <View style={styles.priceSection}>
                            <Text style={styles.label}>Price:</Text>
                            <Text style={styles.price}>₹50.00</Text>
                        </View>
                        { 
                            routeName == "Favourites" ? 
                            <View style={styles.buttonSection}>
                                <Button btnName={"Add to cart"} borderRadius={5} height={25} color={COLORS.textColor} />
                            </View> : 
                            <Ionicons style={styles.icon} name="heart-outline" size={25} color={COLORS.primary} />
                        }
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardSection:{
        backgroundColor:COLORS.white,
        flexDirection:'row',
        borderRadius:10,
        paddingVertical:5,
        paddingLeft:5,
        marginVertical:5
    },
    imageSection:{
        marginRight:20, 
        backgroundColor:COLORS.lightGrey, 
        borderRadius:10
    },
    productImage:{
        height:110,
        width:110,
        resizeMode:"cover",
        borderRadius:10
    },
    name: {
        marginHorizontal:10,
        marginTop:5,
        fontSize:16,
        fontWeight:'500',
        textTransform:'capitalize',
        color:COLORS.textColor
    },
    subHeading:{
        width:width*0.57,
        marginHorizontal:10,
        textAlign:'left',
        fontSize:15,
        color:COLORS.textColor
    },
    icon:{
        position:'absolute',
        right:0,
        bottom:5
    },
    favIcon:{
        position:'absolute',
        right:0,
        marginRight:10
    },
    cardFooter:{
        flexDirection:'row', 
        alignItems:'center', 
        marginHorizontal:10
    },
    priceSection:{
        flexDirection:'row', 
        alignItems:'center',
        marginBottom:5
    },
    label:{
        fontSize:15,
        marginRight:10,
        alignItems:'center',
        color:COLORS.textColor
    },
    price:{
        fontWeight:'bold',
        fontSize:16,
        color:COLORS.textColor
    },
    buttonSection:{
        // width:width*0.5,
        position:'absolute',
        right:0
    }
})

export default Cart;