import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { readData } from './src/utils/Utils';
import Navigation from './src/navigations/navigation';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { signIn } from './src/store/reducers/authSlice';
import { SafeAreaView } from 'react-native';

const App = () => {
  useEffect(() => {
      SplashScreen.hide();
      CheckUserData();
  }, []);

  const CheckUserData = async () => {
    let userDetails = await readData('user_details');
    let userToken = await readData('user_token');
    let signType = await readData('sign_type');

    if (userToken && userDetails) {
      store.dispatch(signIn({
        userDetails: userDetails,
        userToken: userToken,
        signType: signType,
      }));
    } else {
      console.log('No stored user data found');
    }
  };


  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
