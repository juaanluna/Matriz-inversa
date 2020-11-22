import React from "react";
import { Text, StatusBar, View } from "react-native";

const Result = ({ route }) => {
  const { value } = route.params;
  console.log("alou", value);
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="#2288DD" barStyle="light-content" />
      <Text style={{ fontWeight: "bold", fontSize:24 }}>Resultado obtido:</Text>
      <Text
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize:24,
          padding:10,
          
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default Result;
