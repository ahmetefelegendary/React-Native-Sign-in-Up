const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import CheckYourEmail from "./screens/CheckYourEmail";
import Successfully from "./screens/Successfully";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "DM Sans_regular": require("./assets/fonts/DM_Sans_regular.ttf"),
    "DM Sans_medium": require("./assets/fonts/DM_Sans_medium.ttf"),
    "DM Sans_bold": require("./assets/fonts/DM_Sans_bold.ttf"),
    "Open Sans_regular": require("./assets/fonts/Open_Sans_regular.ttf"),
    "Open Sans_semibold": require("./assets/fonts/Open_Sans_semibold.ttf"),
    "Open Sans_bold": require("./assets/fonts/Open_Sans_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckYourEmail"
              component={CheckYourEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Successfully"
              component={Successfully}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
