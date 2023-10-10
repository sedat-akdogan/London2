import React, {useState, useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  // state for activity indicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //check if user id is set or not
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes',
        ),
      );
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <Image
            source={require('../../Image/aboutreact.png')}
            style={{width: '90%', resizeMode: 'contain', margin: 30}}
        />
        <ActivityIndicator
            animating={animating}
            color='#FFFFFF'
            size='large'
            style={styles.activityIndicator}
        />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
