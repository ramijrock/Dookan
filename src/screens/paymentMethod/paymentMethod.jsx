import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Arrow, Button} from '../../components';
import {COLORS} from '../../utils/globalColors';
import {useNavigation} from '@react-navigation/native';
import {PaymentCard} from '../../layouts';

const Data = [
    {
        id:0,
        name: 'UPI',
        value: 'upi'
    },
    {
        id:1,
        name: 'Card',
        value: 'card'
    },
    {
        id:2,
        name: 'COD (Cash on Delivery)',
        value: 'cod'
    },
]

const PaymentMethod = () => {
  const navigation = useNavigation();

  const [isClicked, setIsClicked] = useState(0)


  const selectMethod = (item) => {
    setIsClicked(item.id)
    // console.log('item====>',item.id);
  }

  return (
    <View style={styles.container}>
        <View style={styles.headerSection}>
            <Arrow title={'Payment Method'} name={'chevron-back'} onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.body}>
            <View style={styles.titleSection}>
                <Text style={styles.title}>Choose your payment methods.</Text>
            </View>
            {
                Data.map((item, index) => {
                    return (
                        <PaymentCard key={index.toString()} borderColor={isClicked == item.id ? COLORS.primary : null} borderWidth={isClicked == item.id ? 1 : null}>
                            <TouchableOpacity style={[isClicked == item.id ? styles.circleFill : styles.circle]} onPress={() => selectMethod(item)} />
                            <View>
                                <Text style={styles.methodName}>{item.name}</Text>
                            </View>
                        </PaymentCard>
                    )
                })
            }
        </View>
        <View style={{padding: 9}}>
            <Button btnName={'Pay now'} borderRadius={10} height={50} fontSize={16} color={COLORS.black} onPress={() => navigation.navigate('PaymentDetail')} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    backgroundColor: COLORS.lightwhite,
    paddingBottom: 10,
    padding: 16,
  },
  body: {
    padding: 9,
    flex:1,
  },
  titleSection: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
  circle:{
    height:30,
    width:30,
    borderRadius:50,
    borderWidth:1,
    borderColor:COLORS.primary,
    marginHorizontal:15
  },
  circleFill:{
    height:30,
    width:30,
    borderRadius:50,
    backgroundColor:COLORS.primary,
    marginHorizontal:15,
  },
  methodName:{
    fontWeight:'bold',
    fontSize:20,
    color:COLORS.black
  }
});

export default PaymentMethod;
