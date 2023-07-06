import React, { useState } from "react";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { colors, locations, styles } from "../config/styles";
import { Paragraph, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import 'firebase/firestore';
import { database, auth } from "../config/firebase/firebase";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

export default function CadPersona({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [nomePersona, setNomePersona] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const richTextRef = React.createRef();
    const handleHead = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>
    const richText = React.useRef();

    console.log(bookId);

    const handleSalvar = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                throw new Error("Usuário não autenticado.");
            }

            const docRef = await addDoc(collection(database, "personagens"), {
                nomePersona: nomePersona,
                descricao: descricao,
                bookId: bookId,
            });
            navigation.navigate("Página Inicial", { bookId: bookId });
            console.log("Personagem adicionado com ID: ", docRef.id);

        } catch (error) {
            console.error("Erro ao adicionar Personagem: ", error.message);
        }
    };

    useEffect(() => {
        if (route.params.bookId !== bookId) {
            setBookId(route.params.bookId);
        }

        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "personagens", "dr5mLf4qGeGkwgLhQ1T8");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setDescricao(docSnap.data().descricao);
                }
            } catch (error) {
                console.error("Erro ao buscar conteúdo anterior: ", error.message);
            }
        };

        fetchPreviousContent();

    }, [bookId, route.params.bookId]);

    return (
        <ScrollView>
        <SafeAreaProvider style={styles.containercriacaoper}>
            <View style={{ flex: 1 }}>
                <View style={{ flexBasis: "10%" }}>
                    <LinearGradient
                        // Background Linear Gradient 
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={colors}
                        locations={locations}
                        style={{ height: 7, width: "100%" }}
                    />
                    <View style={styles.containermodal}>
                        <View style={styles.containernomeper}>
                            <Text style={styles.paragraphper}>
                                Nome do Mundo:
                                <TextInput
                                    style={styles.inputper}
                                    value={nomePersona}
                                    onChangeText={text => setNomePersona(text)}
                                />
                            </Text>
                        </View>

                        <View style={styles.centeredView}>
                            <Modal
                                animationType="none"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Icon name="close"
                                            style={styles.buttonclose}
                                            onPress={() => setModalVisible(!modalVisible)}

                                        />

                                        <Text style={styles.modalText}>O primeiro passo é pequeno, mas não tão simples.
                                            Você deve escrever uma frase que resuma toda a história do seu livro.
                                            Recomendamos fazer uma frase com menos de 15 palavras que aborda as principais questões da estória sem citar nomes de personagens.
                                        </Text>
                                        <Text style={styles.modalText2}>
                                            O resultado deve ficar mais ou menos assim:
                                        </Text>
                                        <Text style={styles.modalText3}>
                                            “Um cientista excêntrico viaja no tempo para matar Hitler.”
                                        </Text>
                                        <Text>
                                            Como você pode observar, descrevemos o protagonista em vez de citar seu nome.
                                            Mencionar Hitler não tem problema, pois ele é uma figura histórica.
                                            Não se preocupe em alcançar a perfeição. O objetivo de cada etapa é justamente desenvolver e aperfeiçoar o seu enredo aos poucos.
                                        </Text>
                                        <Text style={styles.modalText4}>
                                            Aqui há outros exemplos para se inspirar:
                                        </Text>
                                        <Text style={styles.modalText5}>
                                            “Garoto órfão descobre que é um bruxo famoso e é levado para uma escola de magia” (Harry Potter e a Pedra filosofal)
                                        </Text>
                                        <Text style={styles.modalText6}>
                                            “Estudante adolescente descobre que o garoto que ela está interessada é um vampiro” (Crepúsculo)</Text>

                                    </View>
                                </View>
                            </Modal>

                            <Icon name="information-outline" style={styles.iconinfo}
                                onPress={() => setModalVisible(true)} />

                        </View>
                    </View>
                </View>

                <View style={
                    {
                        // maxWidth: 300,
                        flexBasis: "75%",
                    }
                }
                >
                    <View
                        style={{
                            height: 7,
                            backgroundColor: '#EBDEF0',
                            marginBottom: 10 //opcional
                        }}
                    />
                    <SafeAreaView>
                        <RichToolbar
                            editor={richText}
                            actions={[actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, actions.insertBulletsList,
                            actions.insertOrderedList, actions.checkboxList, actions.insertLink]}
                            iconMap={{ [actions.heading1]: handleHead }}
                        />
                            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                                <RichEditor
                                    ref={richText}
                                    onChangeText={text => setDescricao(text)}
                                    initialContentHTML={descricao}
                                    initialHeight={300}
                                />
                            </KeyboardAvoidingView>




                    </SafeAreaView>


                </View>
                <View
                    style={{
                        flexBasis: "20%"
                    }}
                    >
                    <View style={styles.containersalvarper}>

                        <TouchableOpacity style={{
                            backgroundColor: "#EBDEF0",
                            margin: 30,
                            minWidth: 80,
                            alignItems: "center",
                            borderWidth: 3,
                            borderColor: "#D9D9D9",
                            borderStyle: "solid",
                            borderRadius: 1,
                            padding: 5,
                        }}
                        mode="contained"
                            onPress={handleSalvar}>
                            <Text style={{ color: "black", fontSize: 18 }}>Salvar</Text>
                        </TouchableOpacity>

                    </View>

                    <LinearGradient
                        // Background Linear Gradient 
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={colors}
                        locations={locations}
                        style={{ height: 7, width: "100%" }}
                        />
                </View>
            </View>
        </SafeAreaProvider >
                        </ScrollView>
    );
}
