import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {COLORS, width} from '../../../utils/globalColors';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = () => {
  const rightSwipe = () => {
    return (
      <View style={styles.rightSection}>
        <TouchableOpacity>
          <MaterialCommunityIcons name='trash-can-outline' size={30} color={COLORS.error} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.segment}>
          <View style={styles.imageSection}>
            <Text>GB</Text>
          </View>
          <View style={styles.bodySection}>
            <View style={styles.titleSection}>
              <Text style={styles.bodyTitle}>Shop</Text>
              <Text style={styles.notiTime}>10:25 pm</Text>
            </View>
            {/* <ScrollView> */}
            <Text style={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              asperiores odio rem animi fugit quia perspiciatis eum,
              exercitationem ea esse laboriosam mollitia delectus hic quo nulla
              illo sit cumque vitae!
            </Text>
            {/* </ScrollView> */}
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  segment: {
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
  },
  imageSection: {
    height: 110,
    width: 90,
    backgroundColor: COLORS.iconColor,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodySection: {
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
    paddingVertical: 5,
    width: width * 0.68,
    height: 110,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyTitle: {
    color: COLORS.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  notiTime: {
    color: COLORS.iconColor,
    fontWeight: '600',
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textColor,
  },
  rightSection:{
    backgroundColor:COLORS.primary,
    height:110,
    alignSelf:'center',
    width:70,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default Card;
