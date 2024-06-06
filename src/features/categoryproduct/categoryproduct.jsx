import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import {ProductCard} from '../../layouts';


const CategoryProduct = ({onPress, productData, onPressFavourite, onPressRemoveFavourite}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.productList}>
            {
                productData?.map((item, index) => {
                    return (
                        <ProductCard 
                            onPress={onPress} 
                            key={index.toString()} 
                            data={item} 
                            onPressFavourite={onPressFavourite} 
                            onPressRemoveFav={onPressRemoveFavourite}
                        />
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    productList:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
})

export default CategoryProduct;