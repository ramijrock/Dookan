import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import {COLORS, height, width} from '../../utils/globalColors';
import {Arrow, Empty} from '../../components';
import {Segment} from '../../layouts';
import {useNavigation} from '@react-navigation/native';
import appContext from '../../context/appContext';
import {
  getAllFavourite,
  removeFromFavourite,
} from '../../services/Main/mainService';

const Favourites = props => {
  const navigation = useNavigation();
  const context = useContext(appContext);
  const [favouriteData, setFavouriteData] = useState([]);
  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      getAllFavouriteData();
    });

    return subscribe;
  }, [navigation]);

  const getAllFavouriteData = () => {
    getAllFavourite(context.userData?.user?._id)
      .then(res => {
        setFavouriteData(res.data);
      })
      .catch(err => {
        if (err.error) {
          console.log('error', err.error);
        } else {
          console.log('errors', err.errors);
        }
      });
  };

  const removeFavouriteProduct = id => {
    let obj = {};
    removeFromFavourite(obj, id)
      .then(res => {
        getAllFavouriteData();
      })
      .catch(err => {
        if (err.error) {
          console.log('error', err.error);
        } else {
          console.log('errors', err.errors);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Arrow title={'Favourites'} />
      </View>
      <View style={styles.body}>
      <FlatList
        data={favouriteData}
        keyExtractor={(i, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <>
              <Segment
                routeName={props.route?.name}
                item={item}
                key={item?._id?.toString()}
                removeFavourite={removeFavouriteProduct}
              />
            </>
          );
        }}
        ListEmptyComponent={<Empty title={"No data found"} />}
      />
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
    flex: 1,
    marginBottom: 10,
  }
});

export default Favourites;