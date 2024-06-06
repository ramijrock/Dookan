import React from "react";
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../utils/globalColors";
import { useNavigation } from "@react-navigation/native";

const Category = ({onPress, CategoryList}) => {
    const navigation = useNavigation();
    return (
        <>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    CategoryList.map((item, index)=>{
                        return(
                        <TouchableOpacity onPress={()=> navigation.navigate('CategoryProduct', {id: item?._id, category: item?.categoryname})} style={styles.catDiv} key={index}>
                            <View style={{padding:5}}>
                                <Image style={styles.catImg} source={{uri: item.image}} />
                            </View>
                            <View style={{marginTop:5, alignItems:'center'}}>
                                <Text style={styles.catText} numberOfLines={1}>{item.categoryname}</Text>
                            </View>
                        </TouchableOpacity>
                        )
                    })
                }
                
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    catDiv:{
        backgroundColor:COLORS.white,
        height:100,
        width:80,
        borderRadius:10,
        alignItems:'center',
        marginHorizontal:12,
        justifyContent:'center',
        marginLeft:0
    },
    catImg:{
        height:50,
        width:50,
        resizeMode:'cover'
    },
    catText:{
        fontSize:10,
        fontWeight:'500',
        lineHeight:16,
        letterSpacing:0.5,
        marginVertical:3,
        marginHorizontal:3,
        alignSelf:'center',
        textTransform:'capitalize',
        color:COLORS.black
    }
})

export default Category;