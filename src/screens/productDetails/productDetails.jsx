import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import {Arrow, Button} from '../../components';
import {COLORS, height, width} from '../../utils/globalColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import {Accordion} from '../../components';
import {getProductByProId} from '../../services/Main/mainService';

const ProductDetails = (props) => {
    const navigation = useNavigation();
    const [productDetails, setProductDetails] = useState({})
    const [count, setCount] = useState(1)
    const [isFavourite, setIsFavourite] = useState(false)

    useEffect(() => {
        const subscribe = navigation.addListener('focus', () => {
            getProductDetailsById();
        })
        return subscribe;
    }, [navigation])

    const getProductDetailsById = () => {
        getProductByProId(props.route.params?.productId)
            .then((res) => {
                setProductDetails(res.data[0]);
                setIsFavourite(res.data[0]?.isfavourite);
            })
            .catch((err) => {
                if (err.error) {
                    console.log('error', err.error);
                } else {
                    console.log('errors', err.errors);
                }
            })
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Arrow name={'chevron-back'} title={'Product details'} onPress={()=>navigation.goBack()} />
            </View>
            <ScrollView>
            <View style={styles.body}>
                <View style={styles.imageSEction}>
                    <View style={{alignSelf:'center'}}>
                        <Image style={styles.productImage} source={{uri: productDetails?.image ?? 'https://res.cloudinary.com/dzqyxaxmv/image/upload/v1685379550/no-results_sbrhzn.png'}} />
                        <View style={styles.featuresImage}>
                            {
                                productDetails?.featuredimage?.map((item) => {
                                    return (
                                        <View style={styles.imageWrapper}>
                                            <Image source={{uri: item ?? 'https://res.cloudinary.com/dzqyxaxmv/image/upload/v1685379550/no-results_sbrhzn.png'}} style={{height:40, width:40, resizeMode:'cover', borderRadius:25}} />
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View style={styles.iconImage}>
                        <Ionicons name={isFavourite ? "heart" : "heart-outline"} color={isFavourite ? COLORS.error : COLORS.primary} size={30} />
                    </View>
                </View>
                <View style={styles.countSection}>
                    <View style={styles.countButton}>
                        <View style={styles.countIcon}>
                            <Ionicons name="remove" size={25} color={COLORS.textColor} />
                        </View>
                        <Text style={styles.countNumber}>{count}</Text>
                        <View style={styles.countIcon}>
                            <Ionicons name="add" size={25} color={COLORS.textColor} />
                        </View>
                    </View>
                    <View style={{}}>
                        <Image style={styles.chatIcon} source={require('../../assets/images/chat.png')} />
                    </View>
                    <View style={styles.ratingSection}>
                        <Ionicons name="star-outline" size={25} color={COLORS.primary} />
                        <Ionicons name="star-outline" size={25} color={COLORS.primary} />
                        <Ionicons name="star-outline" size={25} color={COLORS.primary} />
                        <Ionicons name="star-outline" size={25} color={COLORS.primary} />
                        <Ionicons name="star-outline" size={25} color={COLORS.primary} />
                    </View>
                </View>
                <View style={styles.headingSection}>
                    <View>
                        <Text numberOfLines={1} style={styles.productName}>{productDetails?.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.subHeading}>{productDetails?.category?.categoryname}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.productDescription}>{productDetails?.description}</Text>
                </View>
                <View style={styles.productType}>
                    <View style={styles.productSelect}>
                        <View style={styles.selectProduct}>
                            <Ionicons name="checkmark" color={COLORS.tab} size={30} />
                        </View>
                        <View >
                            <View style={styles.row}>
                                <Text style={styles.label}>Weight:</Text>
                                <Text style={styles.label2}>1 kg</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Price:</Text>
                                <Text style={styles.label2}>₹20.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productSelect}>
                        <View style={styles.selectProduct}>
                            <Ionicons name="checkmark" color={COLORS.tab} size={30} />
                        </View>
                        <View >
                            <View style={styles.row}>
                                <Text style={styles.label}>Weight:</Text>
                                <Text style={styles.label2}>1 kg</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Price:</Text>
                                <Text style={styles.label2}>₹20.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{}}>
                    <Accordion />
                </View>
            </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.buttonSection}>
                    <View style={styles.buttonWrapper}>
                        <Button color={COLORS.textColor} btnName={'Add to cart'} height={50} borderRadius={10} fontSize={16} onPress={() => navigation.navigate('MyCart')} />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button btnName={'Buy Now'} height={50} color={COLORS.textColor} borderRadius={10} fontSize={16} onPress={() => navigation.navigate('MyCart')} />
                    </View>
                </View>
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:COLORS.cardImg
    },
    headerSection: {
        backgroundColor:COLORS.lightwhite, 
        paddingBottom:10, 
        padding:16
    },
    body:{
        padding:9,
        flex:1
    },
    imageSEction:{
        height:height*0.4,
        backgroundColor:COLORS.lightGrey,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    },
    productImage:{
        width:width*0.955,
        height:height*0.4,
        resizeMode:'contain',
        borderRadius:12
    },
    featuresImage:{
        position:'absolute',
        bottom:5,
        left:10,
        flexDirection:'row',
    },
    imageWrapper:{
        width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center', borderWidth:2, borderColor:COLORS.primary, marginHorizontal:5
    },
    iconImage:{
        position:'absolute',
        top:8,
        left:8,
    },
    countSection:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8,
        // borderRadius:10,
        // backgroundColor:COLORS.white,
        justifyContent:'space-between'
    },
    countButton:{
        backgroundColor:COLORS.white,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:8,
        paddingVertical:2,
        // width:width*0.35
    },
    countIcon:{
        // backgroundColor:'red',
        padding:6
    },
    countNumber:{
        paddingVertical:7,
        backgroundColor:COLORS.primary,
        fontSize:16,
        lineHeight:26,
        color:COLORS.white,
        fontWeight:'bold',
        paddingHorizontal:15,
    },
    chatIcon:{
        height:25,
        width:25,
        resizeMode:'contain',
        // position:'absolute',
        // top:0
    },
    ratingSection:{
        flexDirection:'row',
        alignItems:'center'
    },
    headingSection:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10,
        // backgroundColor:'red'
    },
    productName:{
        fontSize:19,
        color:COLORS.black,
        fontWeight:'600',
        lineHeight:25,
        letterSpacing:0.5,
        textTransform:"capitalize",
        width:width*0.7,
    },
    subHeading:{
        fontSize:16,
        fontWeight:'400',
        lineHeight:25,
        textTransform:"capitalize",
        color:COLORS.textColor
    },
    productDescription:{
        fontSize:14,
        lineHeight:18,
        letterSpacing:0.5,
        color:COLORS.textColor
    },
    productType:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10
    },
    productSelect:{
        flexDirection:'row',
        alignItems:'center'
    },
    selectProduct:{
        backgroundColor:COLORS.white,
        borderRadius:8,
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center'
    },
    row:{
        flexDirection:'row',
        marginHorizontal:5,
        alignItems:'center'
    },
    label:{
        fontSize:12,
        lineHeight:18,
        fontWeight:'400',
        color:COLORS.textColor
    },
    label2:{
        fontSize:14,
        marginHorizontal:5,
        lineHeight:25,
        fontWeight:'bold',
        color:COLORS.textColor
    },
    footer:{
        // position:'absolute',
        // bottom:10,
        paddingHorizontal:9,
        paddingBottom:9
    },
    buttonSection:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    buttonWrapper:{
        width:width*0.45
    }
})

export default ProductDetails;