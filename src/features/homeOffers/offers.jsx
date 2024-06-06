import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, FlatList, StyleSheet, View, Text } from "react-native";
import { Offers } from "../../utils/productCategory";

const {width, height} = Dimensions.get('window');
const Offer = () => {

    const RenderItem =({item}) => {
        return(
            <View>
                <Image style={styles.offerImg} source={item.image} />
            </View>
        )
    }

    return (
        <>
            <View style={styles.offerBox}>
                <FlatList 
                    data={Offers}
                    renderItem={({item})=> <RenderItem item={item} />}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    offerBox:{
        height:height*0.24,
    },
    offerImg:{
        height:height*0.24,
        resizeMode:"contain",
        width:width*0.918,
        borderRadius:15,
    }
})

export default Offer;