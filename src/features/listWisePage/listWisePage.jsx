import React from "react";
import {View, StyleSheet } from "react-native";
import { ProductCard } from "../../layouts";


const ListWisePage = () => {
    return (
        <View style={styles.productList}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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

export default ListWisePage;