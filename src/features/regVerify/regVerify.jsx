import React from "react";
import { View, StyleSheet, Text } from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { COLORS } from "../../utils/globalColors";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";


const RegVerifyFeatures = () => {
    const navigation = useNavigation();
    return (
        <>
            <View>
                <View style={{alignItems:'center'}}>
                    <OTPInputView
                        style={{width:'80%', height:80, borderColor:COLORS.primary}}
                        pinCount={4}
                        autoFocusOnLoad={false}
                        onCodeFilled = {(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                        codeInputFieldStyle={{color:COLORS.primary, fontSize:20, padding:10, height:60, width:60, borderRadius:10}}
                        codeInputHighlightStyle={{borderColor:COLORS.primary}}
                    />
                </View>
                <View>
                    <Text style={styles.resendText}>Resend code?</Text>
                </View>
                <View style={styles.wrapper}>
                    <Button fontSize={18} height={50} btnName="Verify" onPress={()=>navigation.navigate('CreatePin')} />
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    resendText:{
        alignSelf:'flex-end',
        right:35,
        marginVertical:5,
    },
    wrapper:{
        marginVertical:15,
        paddingHorizontal:30
    }
})

export default RegVerifyFeatures;