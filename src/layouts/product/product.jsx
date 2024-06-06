import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Dimensions, Alert } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components';
import { COLORS } from "../../utils/globalColors";

const {width, height} = Dimensions.get('window');
const Product = ({onPress, data, onPressFavourite, onPressRemoveFav}) => {
    const [favourite, setFavourite] = useState(data?.isfavourite ?? false);
    
    const handleFavourite = (favData) => {
        setFavourite(!favourite)
        if (!data?.isfavourite) {
            onPressFavourite(favData, !favourite)
        } else {
            onPressRemoveFav(favData)
        }
    }


    return (
        <View>
            <Card style={styles.cardSection} onPress={()=> onPress(data)} >
                <View style={styles.icon}>
                    <Ionicons 
                        name= {favourite ? "heart" : "heart-outline"} 
                        size={30} 
                        // onPress={() => {isFavourite ? removeFav(data) : favourite(data)}}
                        color={favourite ? "rgba(255,0,0,0.8)" : COLORS.lightPrimary} 
                        onPress={() => handleFavourite(data)}
                    />
                </View>
                {
                    data?.price?.discountprice &&
                    <View style={styles.discount}>
                        <Text style={styles.discountText}>{`${data?.price?.discountprice} %`}</Text>
                    </View>
                }
                <View style={styles.imgSection}>
                    <Card.Cover style={styles.cardImg} source={{uri: data?.image ?? 'https://res.cloudinary.com/dzqyxaxmv/image/upload/v1685379550/no-results_sbrhzn.png'}} />
                </View>
                <View style={styles.content}>
                    <View style={styles.contentSection}>
                        <Text style={[styles.title, ]} numberOfLines={1}>{data?.name ?? 'name'}</Text>
                        <Text style={[styles.title, {}]}>{data?.price?.weight ?? 1}{data?.price?.typeofweight ?? 'kg'}</Text>
                    </View>
                    <View style={styles.priceSection}>
                        <Text style={styles.price}>Price:</Text>
                        <Text style={styles.title}>{`₹ ${data?.price?.actualprice ?? 0}`}</Text>
                    </View>
                </View>
                <View style={styles.actionSection}>
                    <View style={styles.ratingSection}>
                        <Ionicons name="star-outline" size={20} color={COLORS.lightPrimary} />
                        <Text style={{fontSize:16, marginLeft:5, color:COLORS.primary}}>{data?.totalrating ?? '0.0'}</Text>
                    </View>
                    <View style={styles.button}>
                        <Button btnName={'Add to cart'} height={25} fontSize={11} borderRadius={5} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardSection:{
        width:width*0.44,
        marginHorizontal:5,
        backgroundColor:COLORS.white,
        marginVertical:5
    },
    icon:{
        position:'absolute',
        zIndex:5,
        top:5,
        left:5
    },
    discount:{
        position:'absolute',
        zIndex:144,
        top:5,
        right:5
    },
    discountText:{
        backgroundColor:COLORS.primary, 
        color:COLORS.white, 
        paddingHorizontal:10, 
        borderRadius:5,
        fontWeight:'bold'
    },
    imgSection:{
        backgroundColor:COLORS.cardImg, 
        alignItems:'center', 
        borderRadius:11, 
        height:height*0.2, 
        justifyContent:'center',
    },
    cardImg:{
        resizeMode:'contain',
        height:120,
        width:120,
        backgroundColor:'transparent'
    },
    content:{
        padding:8
    },
    contentSection:{
        flexDirection:'row',
        justifyContent:"space-between"
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        textTransform:'capitalize',
        color:COLORS.textColor
    },
    priceSection:{
        flexDirection:'row',
        alignItems:'center',
    },
    price:{
        fontSize:16, 
        marginRight:5,
        color:COLORS.textColor
    },
    actionSection:{
        padding:5,
        paddingVertical:8,
        // justifyContent:'space-between',
        // flexDirection:'row',
        // alignItems:'center'
    },
    ratingSection:{
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        position:'absolute', 
        right:5, 
        bottom:5,
        alignSelf:'center',
        // width:60
    }
})

export default Product;