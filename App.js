import React from 'react';
import 'react-native-gesture-handler';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/drawerScreens/SplashScreen';
import LoginScreen from './src/drawerScreens/LoginScreen';
import RegisterScreen from './src/drawerScreens/RegisterScreen';
import DrawerNavigationRoutes from './src/drawerScreens/DrawerNavigationRoutes';

const Stack = createStackNavigator();

const Auth = () => {
    // stack navigator for Login and Singup screens
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="Login Screen"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register Screen"
                component={RegisterScreen}
                options={{
                    title: "Register", // Set Header Title
                    headerStyle: {
                        backgroundColor: '#307ecc' // Set header color
                    },
                    headerTintColor: '#fff', // set header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', // set header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* splash screen will appear once for 5 seconds */}
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}} // hiding header for splash screen
          />
          {/* Auth navigator include login and signup */}
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          {/* Navigation Drawer as a landing page */}
          <Stack.Screen
            name="Drawer Navigation Routes"
            component={DrawerNavigationRoutes}
            options={{headerShown: false}} // hiding header for navigation drawer
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
