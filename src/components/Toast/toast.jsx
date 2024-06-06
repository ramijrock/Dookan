import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Config from "../../Configs/config";
import { AntDesign, Octicons} from 'react-native-vector-icons';

const ToastModal = ({ isVisible, message, onClose, duration = 5000, type }) => {
  useEffect(() => {
    let timer;

    if (isVisible) {
      timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [duration, onClose, isVisible]);
  return (
    <>
      {isVisible ? (
        <View
          style={[reduxColors.toast, { top: Platform.OS == "ios" ? 30 : 0 }]}
        >
          <View style={reduxColors.tostStyle}>
            {type ? (
              <View>
                {type == Config.ERROR_TYPE ? (
                  <AntDesign
                    name="exclamationcircle"
                    size={26}
                    color={"#E93353"}
                  />
                ) : type == Config.SUCCESS_TYPE ? (
                  <Octicons
                    name="check-circle-fill"
                    size={26}
                    color={"#37BD69"}
                  />
                ) : type == Config.ALERT_TYPE ? (
                  <AntDesign
                    name="exclamationcircle"
                    size={26}
                    color={"#FA6140"}
                  />
                ) : type == Config.WARNING_TYPE ? (
                  <AntDesign
                    name="exclamationcircle"
                    size={26}
                    color={"#E4B819"}
                  />
                ) : null}
              </View>
            ) : null}
            <View style={{ flex: 1, width: "100%" }}>
              <Text style={reduxColors.toastText}>{message}</Text>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
    toast: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 10,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      justifyContent: "center",
      marginHorizontal: 16,
      marginVertical: 16,
      elevation: 5,
      paddingVertical: 18,
    },
    toastText: {
      fontSize:16,
      fontWeight:'400',
      color: '#000000AA',
      marginLeft: 8,
    },
    tostStyle: {
      flexDirection: "row",
      alignItems: "center",
    },
  });

export default ToastModal;
