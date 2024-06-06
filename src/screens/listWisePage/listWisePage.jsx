import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Arrow } from "../../components";
import { LWProductFeatures } from "../../features";
import { Header, ProductCard } from "../../layouts";
import { COLORS } from "../../utils/globalColors";

const ListWisePage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:COLORS.lightwhite, paddingBottom:10, padding:16}}>
                <View style={styles.pageTitle}>
                    <Arrow name={'chevron-back'} title={'New Collection'} onPress={()=>navigation.goBack()} />
                </View>
                <View >
                    <Header />
                </View>
            </View>
            <ScrollView style={styles.productSection} showsVerticalScrollIndicator={false}>
                <LWProductFeatures />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    },
    pageTitle:{
        marginBottom:8
    },
    productSection:{
        paddingHorizontal:9
        // flexWrap:'wrap'
    }
})

export default ListWisePage;