import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Arrow} from '../../components';
import {COLORS, width} from '../../utils/globalColors';
import {Notifycard} from './components';

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Arrow title={'Notifications'} />
      </View>
      <View style={styles.body}>
        <View style={styles.headingSection}>
          <Text style={styles.heading}>Today</Text>
        </View>
        <Notifycard />
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
  },
  headingSection: {
    paddingTop: 16,
    marginBottom:5
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textColor,
  },
  
});

export default Notification;
