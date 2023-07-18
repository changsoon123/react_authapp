import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./screens/SignupScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./constants/styles";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.primary100 },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
