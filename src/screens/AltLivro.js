import * as React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"; // added getDoc and updateDoc
import { LinearGradient } from "expo-linear-gradient";
import { auth, database } from "../config/firebase/firebase";
import ImagePicker from "./ImagePicker";
import { colors, locations, styles } from "../config/styles";
import { useEffect } from "react";

const AltLivro = ({ navigation, route }) => { // route is passed as a prop
    const { bookId } = route.params; // get bookID from route
    const [nomeLivro, setNomeLivro] = React.useState("");
    const [capaLivro, setCapaLivro] = React.useState("");
    const user = auth.currentUser;
    if (!user) {
        throw new Error("Usuário não autenticado.");
    }

    const handleUpdate = async () => {
        try {
            console.log(route);
            const docRef = doc(database, "livros", route.params.bookId);

            await updateDoc(docRef, {
                nomeLivro: nomeLivro,
                capaLivro: capaLivro,
            });
            navigation.navigate("Biblioteca");
            console.log("livros atualizado com ID: ", route.params.bookId);
        } catch (error) {
            console.error("Erro ao atualizar livros: ", error.message);
        }
    }

    useEffect(() => {
        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "livros", route.params.bookId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setNomeLivro(docSnap.data().nomeLivro);
                    setCapaLivro(docSnap.data().capaLivro);
                }
            } catch (error) {
                console.error("Erro ao buscar conteúdo anterior: ", error.message);
            }
        };

        fetchPreviousContent();
    }, [route.params.capId]);
    const handleImgURLChange = (url) => {
        setCapaLivro(url); // Set the URL directly instead of wrapping it in an object

    };

    return (
        <View style={{ flexBasis: "100%" }}>
            <View style={styles.containerBiblio}>
                <LinearGradient // Background Linear Gradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    locations={locations}
                    style={{ height: 7, width: "100%", }}
                />

                <View
                    style={{
                        backgroundColor: "white",
                        height: 380,
                        borderRadius: 25,
                        width: 240,
                        alignSelf: "center",
                        marginTop: 30,
                    }}
                >
                    <View style={{ flexBasis: "100%" }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                marginLeft: 25,
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
                                Editar Livro
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View>
                                {capaLivro ? (
                                    <TouchableOpacity onPress={() => setCapaLivro(null)}>
                                        <ImageBackground
                                            style={{ width: 130, height: 180, alignSelf: "center" }}
                                            source={{ uri: capaLivro }}
                                        >
                                            <ImagePicker onImgURLChange={handleImgURLChange}></ImagePicker>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                ) : (
                                    <ImageBackground
                                        source={{ uri: capaLivro }}
                                        style={{ width: 130, height: 180, alignSelf: "center" }}
                                    >
                                        <ImagePicker onImgURLChange={handleImgURLChange}></ImagePicker>
                                    </ImageBackground>
                                )}
                            </View>
                        </View>
                        <Text
                            style={{
                                fontSize: 25,
                                marginTop: 20,
                                marginLeft: 25,
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
                                alignSelf: "center",
                            }}
                            label="Nome do Livro"
                            value={nomeLivro}
                            onChangeText={setNomeLivro}
                        />
                        <TouchableOpacity
                            style={{
                                borderWidth: 3,
                                borderColor: "#D9D9D9",
                                backgroundColor: "#D5ECB6",
                                width: 60,
                                height: 30,
                                marginTop: 15,
                                display: "flex",
                                marginLeft: 150,
                            }}
                            onPress={handleUpdate}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    margin: 2,
                                }}
                            >
                                Salvar
                            </Text>
                        </TouchableOpacity >
                    </View>
                </View>
                <LinearGradient // Background Linear Gradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    locations={locations}
                    style={{ height: 7, width: "100%", marginTop: 265 }}
                />
            </View>
        </View>

    );
};

export default AltLivro;