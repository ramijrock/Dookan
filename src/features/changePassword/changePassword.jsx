import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Keyboard} from 'react-native';
import {COLORS} from '../../utils/globalColors';
import {Button, TextInput} from '../../components';
import { changePassword } from '../../services/Main/mainService';
import appContext from "../../context/appContext";

const ChangePassword = () => {
  const context = useContext(appContext);
  const [inputs, setInputs] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOnChangeText = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  const validate = () => {
    console.log('called this function');
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.oldPassword) {
      handleError('This field is required!', 'oldPassword');
      valid = false;
    }

    if (valid) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    setLoading(true);
    let obj = {
      email: context.userData?.user?.email,
      oldPassword: inputs.oldPassword
    }
    changePassword(obj)
      .then((res) => {
        console.log('res for change password====>', res);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error', err);
        setLoading(false);
      })
  }

  return (
    <>
      <View style={styles.headingSection}>
        <View style={styles.headingWrap}>
          <Text style={styles.heading}>Old password</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>Input your current password</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder={'Old password'}
            placeholderTextColor={COLORS.textColor}
            password
            onChangeText={text => handleOnChangeText(text, 'oldPassword')}
            onFocus={() => handleError(null, 'oldPassword')}
            errorMessage={errors.oldPassword}
          />
        </View>
        <View style={styles.btnSection}>
          <Button
            height={50}
            btnName={'Submit'}
            fontSize={18}
            borderRadius={10}
            onPress={validate}
            loading={loading}
            color={COLORS.textColor}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headingSection: {},
  headingWrap: {
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.textColor,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textColor,
  },
  inputBox: {
    marginVertical: 15,
  },
  btnSection: {
    marginVertical: 20,
  },
});

export default ChangePassword;
