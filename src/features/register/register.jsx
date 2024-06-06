import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Keyboard} from 'react-native';
import {TextInput, CheckBox, Button, SocialButton} from '../../components';
import {COLORS} from '../../utils/globalColors';
import {register} from '../../services/Auth/authServices';

const Register = () => {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cPassword: '',
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOnChangeText = (text, input) => {
    console.log(text);
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  const validate = () => {
    let passRegx = '[A-Z][a-z]*[0-9][a-z]*';
    let emailRegx = '[a-z0-9_-.]+[@][a-z]+[.][a-z]{2 3}';
    console.log(inputs);
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.name) {
      handleError('This field is required!', 'name');
      valid = false;
    } else if (inputs.name.length >= 25) {
      handleError('This field is more than 25 characters!', 'name');
      valid = false;
    }

    if(!inputs.email) {
        handleError('This field is required!', 'email');
        valid = false;
    }
    
    if (!inputs.phone) {
        handleError('This field is required!', 'phone');
        valid = false;
    }

    if (!inputs.password) {
        handleError('This field is required!', 'password');
        valid = false;
    } else if (!inputs.password.match(passRegx)) {
        handleError('First character uppercase and one digit needed to create password!', 'password')
        valid = false;
    }

    if (!inputs.cPassword) {
        handleError('This field is required!', 'cPassword');
        valid = false;
    } else if (inputs.cPassword !== inputs.password) {
        handleError('Confirm password does not match!', 'cPassword');
        valid = false;
    }

    if(!inputs.terms) {
        handleError('Tick this field', 'terms')
        valid = false
    }

    if (valid) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    let obj = {
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      password: inputs.password,
      terms: inputs.terms,
      latitude: '22.5726',
      longitude: '88.3639',
      isAdmin: false,
      isActive: true,

    };
    setLoading(true);
    register(obj)
      .then(res => {
        navigation.navigate('RegVerify', {userData: res.savedUser});
        alert('Registration successfull');
        setLoading(false);
      })
      .catch(err => {
        console.log('error', err);
        setLoading(false);
        alert(err.message);
      });
  };

  return (
    <>
      <View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder={'Name'}
            placeholderTextColor={COLORS.textColor}
            name={'person-outline'}
            keyboardType={'default'}
            onChangeText={(text) => handleOnChangeText(text, 'name')}
            onFocus={() => handleError(null, 'name')}
            errorMessage={errors.name}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder={'Email'}
            placeholderTextColor={COLORS.textColor}
            name={'mail-outline'}
            keyboardType={'email-address'}
            onChangeText={(text) => handleOnChangeText(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            errorMessage={errors.email}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder={'Phone'}
            placeholderTextColor={COLORS.textColor}
            name={'call-outline'}
            keyboardType={'numeric'}
            onChangeText={(text) => handleOnChangeText(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            maxLength={10}
            errorMessage={errors.phone}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder={'Password'}
            password
            placeholderTextColor={COLORS.textColor}
            name={'lock-closed-outline'}
            secureTextEntry={true}
            onChangeText={(text) => handleOnChangeText(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            errorMessage={errors.password}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder={'Confirm Password'}
            password
            placeholderTextColor={COLORS.textColor}
            secureTextEntry={true}
            name={'lock-closed-outline'}
            onChangeText={text => handleOnChangeText(text, 'cPassword')}
            onFocus={() => handleError(null, 'cPassword')}
            errorMessage={errors.cPassword}
          />
        </View>
        <View style={[styles.wrapper, {marginBottom: 20}]}>
          <CheckBox
            title={'Agree our terms and service'}
            onPress={() => {
                handleOnChangeText(!inputs.terms,'terms');
            }}
            onFocus={() => handleError(null, 'terms')}
            checked={inputs.terms}
            errorMessage={errors.terms}
          />
        </View>
      </View>
      <View style={styles.btnSection}>
        <Button
          fontSize={18}
          height={50}
          btnName={'Register'}
          onPress={validate}
          borderRadius={10}
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
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5,
  },
  btnSection: {
    marginVertical: 20,
  },
  orText: {
    alignSelf: 'center',
    color: COLORS.black,
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

export default Register;
