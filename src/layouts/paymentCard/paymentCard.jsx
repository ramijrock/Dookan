import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../utils/globalColors";

const Card = ({children, borderColor, borderWidth}) => {
    return (
        <>
            <View style={[styles.card, {borderColor:borderColor, borderWidth:borderWidth}]}>
                {
                    children ? children :
                    <>
                        <View style={styles.cardIcon}>
                            <Image style={styles.cardImage} source={require('../../assets/images/card.png')} />
                        </View>
                        <View style={{paddingHorizontal: 10}}>
                            <Text style={styles.cardNumber}>0000 0000 0000 1254</Text>
                            <Text style={styles.cardExpires}>Expires 01/04/2023</Text>
                        </View>
                    </>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginVertical: 10,
        height:70
    },
    cardIcon: {
        padding: 15,
    },
    cardImage: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    cardNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.black,
        // marginBottom:10,
        lineHeight: 20,
        paddingVertical: 5,
    },
    cardExpires: {
        marginBottom: 12,
    }
})

export default Card;