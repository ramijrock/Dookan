import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Animated } from "react-native";
import { Header, ProductCard } from '../../layouts';
import { COLORS } from "../../utils/globalColors";
import { ProductCategory, ProductOffers } from '../../features';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
    getCategoryData
} from '../../services/Main/mainService';
import AppContext from "../../context/appContext";
import { readData } from "../../utils/Utils";


const Home = () => {
    const navigation = useNavigation();
    const [category, setCategory] = useState([]);
    const context = useContext(AppContext);

    useFocusEffect(
        useCallback(() => {
            getCategory();
        }, [navigation])
    )

    const getCategory = () => {
        getCategoryData()
            .then((res) => {
                setCategory(res.data);
            })
            .catch((err) => {
                console.log('error', err);
            })
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headerSection}>
                <Header />
            </View>
            <View style={{ paddingHorizontal: 12 }}>
                <Text style={styles.heading}>Category</Text>
                {category?.length > 0 ?
                    <ProductCategory CategoryList={category} /> :
                    <View style={styles.emptyCat}>
                        <Animated.Text style={styles.emptyCatText}>Product category comming soon...</Animated.Text>
                    </View>
                }
            </View>
            <View style={styles.offerSection}>
                <Text style={styles.heading}>Special Offer</Text>
                <ProductOffers />
            </View>
            <View style={styles.newCollectSection}>
                <View style={styles.segment}>
                    <Text style={styles.heading}>New Collection</Text>
                    <Text onPress={() => navigation.navigate('LWProduct')} style={styles.heading}>View All</Text>
                </View>
                <ScrollView style={styles.product} horizontal showsHorizontalScrollIndicator={false}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ScrollView>
            </View>
            <View style={styles.bestSellongSection}>
                <View style={styles.segment}>
                    <Text style={styles.heading}>Best Selling</Text>
                    <Text style={styles.heading} onPress={() => navigation.navigate('LWProduct')}>View All</Text>
                </View>
                <ScrollView style={styles.product} showsHorizontalScrollIndicator={false} horizontal>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ScrollView>
            </View>
            <View style={styles.discountedProductSection}>
                <View style={styles.segment}>
                    <Text style={styles.heading}>Discounted Product</Text>
                    <Text style={styles.heading} onPress={() => navigation.navigate('LWProduct')}>View All</Text>
                </View>
                <ScrollView style={styles.product} showsHorizontalScrollIndicator={false} horizontal>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ScrollView>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal:16,
        // paddingTop:10
    },
    headerSection: {
        backgroundColor: COLORS.lightwhite,
        padding: 16,
        paddingBottom: 10
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        marginVertical: 15,
        color: COLORS.black
    },
    offerSection: {
        paddingHorizontal: 16
    },
    newCollectSection: {
        paddingHorizontal: 16,
        marginBottom: 5
    },
    segment: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bestSellongSection: {
        paddingHorizontal: 16,
        marginBottom: 5
    },
    discountedProductSection: {
        paddingHorizontal: 16,
        marginBottom: 5
    },
    emptyCat: {
        // backgroundColor:'red',
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#4445ea',
        alignItems: 'center',
        borderRadius: 10
    },
    emptyCatText: {
        color: '#4445ea',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default Home;