import React, { useState } from "react";
import { Button, Text, View, StatusBar, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { inv } from "mathjs";

const Home = () => {
  const { navigate } = useNavigation();
  const [position1, setPosition1] = useState("");
  const [position2, setPosition2] = useState("");
  const [position3, setPosition3] = useState("");
  const [position4, setPosition4] = useState("");

  const position1INT = parseInt(position1);
  const position2INT = parseInt(position2);
  const position3INT = parseInt(position3);
  const position4INT = parseInt(position4);

  let matrix = [
    [position1INT, position2INT],
    [position3INT, position4INT],
  ];
  let inverse = inv(matrix);

  const verify = inverse ? inverse : "Não é possivel calcular";
  return (
    <View style={{ backgroundColor: "#5D7987", flex: 1 }}>
      <StatusBar backgroundColor="#2288DD" barStyle="light-content" />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "5%",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Seja bem-vindo(a)!
        </Text>
        <Text style={{ color: "#fff" }}>
          Este é um app que gera matrizes inversas 2x2
        </Text>
      </View>

      {/* linha 1 */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5%",
          height: "20%",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: "40%",
            marginRight: "5%",
            height: "100%",
          }}
        >
          <TextInput
            placeholder="Valor 1"
            onChangeText={(value) => setPosition1(value)}
            style={{ height: "100%", fontSize:50  }}
          />
        </View>
        <View style={{ backgroundColor: "#fff", width: "40%", height: "100%" }}>
          <TextInput
            placeholder="Valor 2"
            onChangeText={(value) => setPosition2(value)}
            style={{ height: "100%", fontSize:50  }}
          />
        </View>
      </View>

      {/* linha 2 */}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "20%",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: "40%",
            marginRight: "5%",
            height: "100%",
          }}
        >
          <TextInput
            placeholder="Valor 3"
            onChangeText={(value) => setPosition3(value)}
            style={{ height: "100%", fontSize:50  }}
          />
        </View>
        <View style={{ backgroundColor: "#fff", width: "40%", height: "100%" }}>
          <TextInput
            placeholder="Valor 4"
            onChangeText={(value) => setPosition4(value)}
            style={{ height: "100%", fontSize:50  }}
          />
        </View>
      </View>

      <Button
        title="Gerar matriz inversa"
        onPress={() => navigate("Result", { value: verify })}
      />
      {/* <Button title="TESTE" onPress={() => console.log(verify)} /> */}
    </View>
  );
};

export default Home;
