import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import {TextInput, Button} from '../../components';


const CreatePassword = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.pinSection}>
                <View style={styles.wrapper}>
                    <TextInput 
                        placeholder={'New Password'} 
                        name={'lock-closed-outline'}
                    />
                </View>
                <View style={styles.wrapper}>
                    <TextInput 
                        placeholder={'Confirm Password'} 
                        name={'lock-closed-outline'}
                    />
                </View>
            </View>
            <View>
                <Button fontSize={18} height={50} btnName="Confirm" onPress={()=> navigation.navigate('BottomTab')} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginVertical:5
    },
    pinSection:{
        marginTop:20,
        paddingBottom:50
    }
})

export default CreatePassword;