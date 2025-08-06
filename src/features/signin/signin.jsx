import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, Keyboard} from 'react-native';
import {TextInput, CheckBox, Button, SocialButton} from '../../components';
import {COLORS} from '../../utils/globalColors';
import {login} from '../../services/Auth/authServices';
import {writeData} from '../../utils/Utils';
import AppContext from '../../context/appContext';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/reducers/authSlice';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const context = useContext(AppContext);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError('This field is required!', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Enter valid email!', 'email');
      valid = false;
    }

    if (!inputs.password) {
      handleError('This field is required!', 'password');
      valid = false;
    }

    if (valid) {
      onSubmit();
    }
  };

  const handleOnChangeText = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  const onSubmit = () => {
    let data = {
      email: inputs.email,
      password: inputs.password,
    };
    setLoading(true);
    login(data)
      .then(res => {
        // successToast('success', res.result.message);
          writeData('user_details', res.user);
          writeData('user_token', res.token);
          writeData('sign_type', res.user.role);
          dispatch(signIn({
            userToken: res.token,
            signType: res.user.role,
            userDetails: res.user,
          }));
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <View style={styles.loginSection}>
        <View style={styles.wrapper}>
          <TextInput
            placeholder={'Email/Phone'}
            name={'mail-outline'}
            onChangeText={text => handleOnChangeText(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            keyboardType={'email-address'}
            errorMessage={errors.email}
            placeholderTextColor={COLORS.textColor}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder={'Password'}
            placeholderTextColor={COLORS.textColor}
            password
            onChangeText={text => handleOnChangeText(text, 'password')}
            errorMessage={errors.password}
            onFocus={() => handleError(null, 'password')}
          />
        </View>
        <View
          style={[styles.wrapper, styles.forgetSection, {marginBottom: 20}]}>
          {/* <View>
            <CheckBox
              title={'Remember me'}
              onPress={() => {
                setInputs({remember: !remember});
              }}
              checked={inputs.remember}
            />
          </View> */}
          <Text
            onPress={() => navigation.navigate('ForgetPassword')}
            style={styles.forgetText}>
            Forget Password?
          </Text>
        </View>
        <View style={styles.btnSection}>
          <Button
            height={50}
            btnName={'Sign In'}
            fontSize={18}
            borderRadius={10}
            onPress={validate}
            loading={loading}
            color={COLORS.textColor}
          />
        </View>
        <View>
          <Text style={styles.orText}>Or</Text>
        </View>
        <View style={styles.socialSection}>
          <SocialButton source={require('../../assets/images/facebook.png')} />
          <SocialButton source={require('../../assets/images/google.png')} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loginSection: {
    marginVertical: 20,
  },
  wrapper: {
    marginVertical: 5,
  },
  forgetSection: {
    // flexDirection: 'row',
    // alignItems:'center',
    // justifyContent: 'space-between',
    alignSelf:"flex-end"
  },
  forgetText: {
    color: COLORS.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnSection: {
    marginVertical: 20,
  },
  orText: {
    alignSelf: 'center',
    color: COLORS.textColor,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default SignIn;
