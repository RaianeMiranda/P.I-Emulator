import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { LinearGradient } from "expo-linear-gradient";
import { auth, database } from "../config/firebase/firebase";
import ImagePickerFirebase from "./ImagePicker";
import { colors, locations, styles } from "../config/styles";


const ModalCadLivros = ({ navigation }) => {
    const [nomeLivro, setNomeLivro] = React.useState("");
    const [descricao, setDescricao] = React.useState("");
    const [capaLivro, setCapaLivro] = React.useState("");

    const handleAdd = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                throw new Error("Usuário não autenticado.");
            } else { console.log(user.uid) }

            if (!nomeLivro.trim()) {
                throw new Error("Por favor, insira um nome para o livro.");
            }

            if (!capaLivro) {
                throw new Error("Por favor, selecione uma capa para o livro.");
            }

            const docRef = await addDoc(collection(database, "livros"), {
                nomeLivro: nomeLivro,
                descricao: descricao,
                capaLivro: capaLivro,
                userId: user.uid,
            });

            console.log("Livro adicionado com ID: ", docRef.id);
            setNomeLivro("");
            setDescricao("");
            setCapaLivro("");
            navigation.navigate("Biblioteca");
        } catch (error) {
            console.error("Erro ao adicionar livro: ", error.message);
        }
    };

    const handleImgURLChange = (url) => {
        setCapaLivro(url);
    };


    return (
        <View style={styles.containerBiblio}>
            <LinearGradient // Background Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors}
                locations={locations}
                style={{ height: 7, width: "100%" }}
            />

            <View
                style={{
                    backgroundColor: "white",
                    height: 380,
                    borderRadius: 25,
                    width: 220,
                    margin: "auto",
                    marginTop: 30,
                }}
            >
                <View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 25,
                                marginBottom: 15,
                                marginTop: 15,
                            }}
                        >
                            Criar Livros
                        </Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            {capaLivro ? (
                                <TouchableOpacity onPress={setCapaLivro}>
                                    <ImageBackground
                                        style={{ width: 130, height: 180 }}
                                        source={{ uri: capaLivro }}
                                    >
                                        <ImagePickerFirebase
                                            onImgURLChange={handleImgURLChange}
                                        ></ImagePickerFirebase>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ) : (
                                <ImageBackground
                                    source={require("../Images/CriarLivros.png")}
                                    style={{ width: 130, height: 180 }}
                                >
                                    <ImagePickerFirebase
                                        onImgURLChange={handleImgURLChange}
                                    ></ImagePickerFirebase>
                                </ImageBackground>
                            )}
                        </View>
                    </View>
                    <Text
                        style={{
                            fontSize: 25,
                            marginTop: 20,

                            marginLeft: 20,
                        }}
                    >
                        Título
                    </Text>
                    <TextInput
                        mode="outlined"
                        underlineColor="#F4CCC8"
                        outlineColor="#F4CCC8"
                        activeOutlineColor="#A5A5A5"
                        style={{
                            width: 180,
                            height: 30,
                            backgroundColor: "#F4CCC8",
                            borderColor: "#F4CCC8",
                            borderTopRightRadius: 0,
                            borderTopLeftRadius: 0,
                            margin: "auto",
                        }}
                        label="Nome do livro"
                        value={nomeLivro}
                        onChangeText={setNomeLivro}
                    />

                    <Button
                        style={{
                            borderWidth: 3,
                            borderColor: "#D9D9D9",
                            backgroundColor: "#D5ECB6",

                            width: 50,
                            borderRadius: 0,
                            height: 30,
                            marginTop: 15,
                            marginLeft: 135,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={handleAdd}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 15,
                            }}
                        >
                            Salvar
                        </Text>
                    </Button>
                </View>
            </View>
            <LinearGradient // Background Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors}
                locations={locations}
                style={{ height: 7, width: "100%", marginTop: "135%" }}
            />
        </View>
    );
};
export default ModalCadLivros;