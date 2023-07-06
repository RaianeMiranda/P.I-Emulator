import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { Button, HelperText, Paragraph, TextInput, } from "react-native-paper";
import { auth } from "../config/firebase/firebase";
import { colors, locations, styles } from "../config/styles";


export const LoginScreen = ({ route, navigation }) => {

  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const [mostraErro, setMostraErro] = useState("");
  const { mensagem } = route.params || false;

  function onLoginPressed() {
    console.log("LoginIniciado");
    if (email.value === "" || password.value === "") {
      setEmail({ ...email, error: "Entre com um e-mail válido" });
      setPassword({ ...password, error: "Entre com uma senha" });
      return;
    }
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Biblioteca");
      })

  }

  function lidarComErro(erro) {
    if (erro == "auth/network-request-failed") {
      setMostraErro("Você está offline, tente novamente mais tarde 😕");

      return;
    }
    if (erro == "auth/wrong-password") {
      setMostraErro("Senha errada 😕");
      return;
    }
    if (erro == "auth/user-not-found") {
      setMostraErro("Usuário não encontrado 😕");
      return;
    }
    if (erro == "auth/invalid-email") {
      setMostraErro("E-mail inválido 😕");
      return;
    }
    setMostraErro(erro);
  }

  return (
    <View style={{ backgroundColor: "#FFF2D8" }} >
      <View>
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%", marginTop: 20, marginBottom: 20 }}
        />
      </View>
      <View style={styles.containerlogin1}>
        <Image style={styles.imagedocks}
          source={require("../Images/logodocks.png")}
        />
        <Paragraph style={styles.paragraphbv}>Bem vindo(a) ao</Paragraph>
        <Paragraph style={styles.paragraphbv1}>Docks</Paragraph>
        <Text style={styles.textbv}>Aqui é o lugar para as</Text>
        <Text style={styles.textbv1}> suas histórias </Text>
        <Text> {mensagem && <HelperText type="info">{mensagem}</HelperText>}</Text>
   
        <TextInput
          mode="outlined"
          underlineColor="#EDEDED"
          outlineColor="#EDEDED"
          activeOutlineColor="grey"
          label="E-mail"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          style={styles.textinput_email}
          /* não essenciais<3 */
          returnKeyType="next"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardAppearance="email-address"
        />
        <TextInput
          mode="outlined"
          underlineColor="#EDEDED"
          outlineColor="#EDEDED"
          activeOutlineColor="grey"
          style={styles.textinput_senha}
          secureTextEntry
          label="Senha"
          value={password.value}
          error={!!password.error}
          errorText={password.error}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
        />
        <TouchableOpacity style={styles.buttoncontinuar1} mode="contained" onPress={onLoginPressed} >
          <Text style={styles.text_cont}>Continuar</Text>
        </TouchableOpacity>
        
        <Text style={styles.text_ou}>OU</Text>

        <TouchableOpacity style={styles.buttoncadface1}>
          <View style={styles.imagetextface}>
            <Image style={styles.imageface}
              source={require("../Images/facedocks.png")} />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={styles.textcadface}>Continuar com o </Text>
              <Text style={styles.textcadface2}> Facebook </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.buttoncadgoogle} mode="contained">
            <View style={styles.imagetextgoogle}>
              <Image style={styles.imagegoogle}
                source={require("../Images/icongoogle.png")} />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={styles.textcadface}>Continuar com o </Text>
                <Text style={styles.textcadface2}>Google </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
               <HelperText type="error">{lidarComErro}</HelperText>
          <Text style={styles.label}>Não possui uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.link}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ backgroundColor: "#FFF2D8" }} >
        <LinearGradient
          // Background Linear Gradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          locations={locations}
          style={{ height: 7, width: "100%", marginTop: 20, marginBottom: 20 }}
        />
      </View>
    </View>

  );
};