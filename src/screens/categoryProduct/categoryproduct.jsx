import React, { useContext, useEffect, useState } from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, SubCategory} from '../../layouts';
import { Arrow } from "../../components";
import { COLORS } from "../../utils/globalColors";
import { useNavigation } from "@react-navigation/native";
import {CategoryProductFeatures} from '../../features';
import {
    getSubCategoryData, 
    getProductByCatId,
    getProductBySubCatId,
    addFavourite,
    removeFromFavourite,
} from '../../services/Main/mainService';
import appContext from "../../context/appContext";


const CategoryProduct = (props) => {
    const navigation = useNavigation();
    const context = useContext(appContext);
    const [subcategory, setSubCategory] = useState([]);
    const [categoryAllProduct, setCategoryAllProduct] = useState([]);

    useEffect(() => {
        const subscribe = navigation.addListener('focus', () => {
            getSubCategory();
            getAllCategoriesProduct();
        })

        return subscribe;
    }, [navigation])

    const getSubCategory = () => {
        getSubCategoryData(props.route.params?.id)
            .then((res) => {
                setSubCategory(res?.data);
            })
            .catch((err) => {
                if (err.error) {
                    console.log('error', err.error);
                } else {
                    console.log('errors', err.errors);
                }
            })
    }

    const getAllCategoriesProduct = () => {
        getProductByCatId(props.route.params?.id)
            .then((res) => {
                setCategoryAllProduct(res?.data);
            })
            .catch((err) => {
                console.log(err);
                if (err.error) {
                    console.log('error', err.error);
                } else {
                    console.log('errors', err.errors);
                }
            })
    }

    const getAllSubCategoriesProduct = (id) => {
        getProductBySubCatId(id)
            .then((res) => {
                setCategoryAllProduct(res.data);
            })
            .catch((err) => {
                if (err.error) {
                    console.log('error', err.error);
                } else {
                    console.log('errors', err.errors);
                }
            })
    }

    const favourite = (data, favourite) => {
        let obj = {
            userid: context.userData?.user?._id,
            productid: data?._id,
            isfavourite: favourite
        }
        addFavourite(obj)
            .then((res) => {
                console.log('res========>', res);
            })
            .catch((err) => {
                if (err.error) {
                    console.log('error', err.error);
                } else {
                    console.log('errors', err.errors);
                }
            })
    }

    const removeFav = (data) => {
        let obj ={}
        removeFromFavourite(obj, data?._id)
            .then((res) => {
                console.log('res========>', res);
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
            <View style={{backgroundColor:COLORS.lightwhite, paddingBottom:10, padding:16}}>
                <View style={styles.pageTitle}>
                    <Arrow name={'chevron-back'} title={props.route.params?.category} onPress={()=>navigation.goBack()} />
                </View>
                <View >
                    <Header />
                </View>
            </View>
            <ScrollView style={styles.productSection} showsVerticalScrollIndicator={false}>
                <SubCategory subCategoryList={subcategory} categoryId={props.route.params?.id} onPress={(id) => getAllSubCategoriesProduct(id)} allProduct={getAllCategoriesProduct} />
                <CategoryProductFeatures 
                    onPress={(item) => navigation.navigate('ProductDetails', {productId: item?._id})} 
                    productData={categoryAllProduct} 
                    onPressFavourite={favourite}
                    onPressRemoveFavourite={removeFav}
                />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    pageTitle:{
        marginBottom:8
    },
    productSection:{
        paddingHorizontal:9,
    },
    subCategorySection:{
        paddingHorizontal:9,
    }
})

export default CategoryProduct;