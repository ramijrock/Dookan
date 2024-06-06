import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { COLORS } from "../../utils/globalColors";


const SubCategory = (props) => {
    const navigation = useNavigation();

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.btnSection}>
                <TouchableOpacity style={[styles.catButton, {width:60}]} onPress={props.allProduct}>
                    <Text style={styles.catName}>All</Text>
                </TouchableOpacity>
                {
                    props.subCategoryList.map((item) => {
                        return (
                            <TouchableOpacity key={item._id} style={styles.catButton} onPress={() => props.onPress(item._id)}>
                                <Text style={styles.catName}>{item.subcategoryname}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnSection:{
        flexDirection:'row',
        // alignItems:'center',
        marginVertical:10, 
    },
    catButton:{
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:'green',
        paddingHorizontal:10,
        marginRight:5,
    },
    catName: {
        textTransform:'capitalize',
        color:COLORS.textColor
    }
})

export default SubCategory;