import React, { useState, useEffect, useRef } from "react";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { colors, locations, styles } from "../config/styles";
import { Paragraph, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import 'firebase/firestore';
import { database, auth } from "../config/firebase/firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

export default function CadCapitulos({ route, navigation }) {
    const [nomeCapitulos, setNomeCapitulos] = useState('');
    const [descricao, setDescricao] = useState('');
    const [bookId, setBookId] = useState(route.params.bookId);
    const richEditorRef = useRef();
    const richText = React.useRef();
    const richTextRef = React.createRef();

    const handleHead = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>
    console.log(bookId);

    const handleSalvar = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                throw new Error("Usuário não autenticado.");
            }

            const docRef = await addDoc(collection(database, "capitulos"), {
                nomeCapitulos: nomeCapitulos,
                descricao: descricao,
                bookId: bookId,
            });
            navigation.navigate("Capítulos", { bookId: bookId });
            setDescricao('');
            setNomeCapitulos('');
            console.log("Capítulo adicionado com ID: ", docRef.id);

        } catch (error) {
            console.error("Erro ao adicionar Capítulo: ", error.message);
        }
    };

    useEffect(() => {
        if (route.params.bookId !== bookId) {
            setBookId(route.params.bookId);
        } setDescricao('');
        setNomeCapitulos('');

        const fetchPreviousContent = async () => {
            try {
                const docRef = doc(database, "capitulos", "Utdn5NdvTAmjVfc2RRxI");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    richText.current.setContentHTML(docSnap.data().descricao);
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
                <View style={{ flexBasis:"100%" }}>
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
                                    Nome do Capítulo:
                                    <TextInput
                                        style={styles.inputper}
                                        value={nomeCapitulos}
                                        onChangeText={text => setNomeCapitulos(text)}
                                    />
                                </Text>
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
                                backgroundColor: '#F1C4A5',
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
                                    onChange={html => setDescricao(html)}
                                    initialHeight={500}
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
                                backgroundColor: "#F1C4A5",
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
