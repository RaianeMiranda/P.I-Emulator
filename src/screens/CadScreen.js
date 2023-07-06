import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { Button, HelperText, Paragraph, TextInput, } from "react-native-paper";
import { auth } from "../config/firebase/firebase";
import { colors, locations, styles } from "../config/styles";

export const CadScreen = ({ navigation }) => {
    const [mostraErro, setMostraErro] = useState("");
    const [nome, setNome] = useState({
        value: "",
        error: "",
    });
    const [email, setEmail] = useState({
        value: "",
        error: "",
    });
    const [password, setPassword] = useState({
        value: "",
        error: "",
    });
    const [confirmaPassword, setConfirmaPassword] = useState({
        value: "",
        error: "",
    });

    function onRegisterPressed() {
        console.log("RegistroIniciado");
        let erro = false;
        if (nome.value === "") {
            setNome({ ...nome, error: "Entre com o seu nome maravilhoso" });
            erro = true;
        }
        if (email.value === "") {
            setEmail({ ...email, error: "Entre com um e-mail válido" });
            erro = true;
        }
        if (password.value === "") {
            setPassword({ ...password, error: "Entre com uma senha" });
            erro = true;
        }
        if (confirmaPassword.value === "") {
            setConfirmaPassword({
                ...confirmaPassword,
                error: "Repita sua senha",
            });
            erro = true;
        }
        if (confirmaPassword.value != password.value) {
            erro = true;
            setConfirmaPassword({
                ...confirmaPassword,
                error: "Senhas não conferem",
            });
        }
        if (!erro) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((value) => {
                    console.log("Cadastrado com sucesso! " + value.user.uid);
                    navigation.navigate("Página Inicial", {
                        mensagem: "Você se registrou com muito sucesso! 💋",
                    });
                })
                .catch((error) => lidarComErro(error.code));
        }
    }

    function lidarComErro(erro) {
        if (erro == "auth/weak-password") {
            setMostraErro("Senha muito Fraquinha");
            return;
        }
        if (erro == "auth/credential-already-in-use") {
            setMostraErro("E-mail já cadastrado");
            return;
        }
        if (erro == "auth/invalid-email") {
            setMostraErro("E-mail inválido");
            return;
        }
        setMostraErro(erro);
    }

    return (
        <View style={{ backgroundColor: "#FFF2D8", height:"100%" }} >
            <View>
                <LinearGradient
                    // Background Linear Gradient 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    locations={locations}
                    style={{ height: 7, width: "100%", marginTop: 40, marginBottom: 40 }}
                />
            </View>
            <View style={styles.containerCad}>
                <Image style={styles.imagedocks}
                    source={require("../Images/logodocks.png")}
                />
                <Paragraph style={styles.paragraphbv}>Bem vindo(a) ao</Paragraph>
                <Paragraph style={styles.paragraphbv1}>Docks</Paragraph>
                <Text style={styles.textbv}>Aqui é o lugar para as</Text>
                <Text style={styles.textbv1}> suas histórias </Text>
                <HelperText type="error">{lidarComErro}</HelperText>
                <TextInput
                    mode="outlined"
                    underlineColor="#EDEDED"
                    outlineColor="#EDEDED"
                    activeOutlineColor="grey"
                    label="Nome Completo"
                    value={nome.value}
                    onChangeText={(text) => setNome({ value: text, error: "" })}
                    error={!!nome.error}
                    errorText={nome.error}
                    style={styles.textinput_senha}
                    /* não essenciais  */
                    returnKeyType="next"
                    textContentType="givenName"
                    keyboardType="default"
                />

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
                <TouchableOpacity style={styles.buttoncontinuar1} mode="contained" onPress={onRegisterPressed} >
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
                    <Text style={styles.label}>Já possui uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.link}>Entrar</Text>
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
                    style={{ height: 7, width: "100%", marginTop: 40, marginBottom: 20 }}
                />
            </View>
        </View>

    );
};