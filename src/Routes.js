import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home';
import Result from './Result';


const Stack = createStackNavigator();

const Routes = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2288DD" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Trabalho de PLA" }}
      />

      <Stack.Screen
        name="Result"
        component={Result}
        options={{ title: "Resultado" }}
      />
      
    </Stack.Navigator>
  );
};

export default Routes;
